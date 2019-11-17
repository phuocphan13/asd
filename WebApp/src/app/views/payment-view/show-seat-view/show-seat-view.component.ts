import { Component, OnInit, Input } from '@angular/core';
import { ShowSeatService } from 'src/app/core/services/show-seat.service';
import { SearchSeatModel } from 'src/app/core/model/search-seat.model';
import { SeatBookingModel } from 'src/app/core/model/seat-booking.model';
import { ReverseSeatModel } from 'src/app/core/model/reverse-seat.model';
import { SeatSharedService } from 'src/app/core/services/seat-shared.service';
import { PaymentSharedService } from 'src/app/core/services/payment-shared.service';
import { MovieSharedService } from 'src/app/core/services/movie-shared.service';
import { SeatModel } from 'src/app/core/model/payment/seat.model';
import { SeatTicketBookingModel } from 'src/app/core/model/payment/seat-ticket-booking.model';

@Component({
  selector: 'app-show-seat-view',
  templateUrl: './show-seat-view.component.html',
  styleUrls: ['./show-seat-view.component.scss']
})
export class ShowSeatViewComponent implements OnInit {

  @Input("data") item: any;

  text: number = 1;
  listSeats: SeatModel[] = new Array(0);
  rowSeats: [];
  showtime: SearchSeatModel = new SearchSeatModel();
  listSeatBooked: any;
  listTicket: SeatTicketBookingModel[] = new Array(0);

  seatBooking: SeatBookingModel;

  constructor(private showSeatService: ShowSeatService,
    private movieSharedService: MovieSharedService,
    private paymentSharedService: PaymentSharedService,
    private seatSharedService: SeatSharedService) { }

  ngOnInit() {
    this.seatBooking = new SeatBookingModel();
    this.showtime.ShowTime = this.movieSharedService.item.idShowTime;
    console.log(this.showtime.ShowTime);
    this.listSeatBooked = this.paymentSharedService.getNumberOfSeats();
    this.listTicket = this.paymentSharedService.getNumberTicket();
    this.showSeatService.getShowSeats(this.showtime).subscribe(result => {
      result.forEach(x => {
        x.isChecked = false;
        this.listSeats.push(x);
      })
      this.showSeats();
    })
  }

  private showSeats() {
    this.listSeats.forEach(x => {
      switch (x.column) {
        case 1: x.name = `${x.row}A`; break;
        case 2: x.name = `${x.row}B`; break;
        case 3: x.name = `${x.row}C`; break;
        case 4: x.name = `${x.row}D`; break;
        case 5: x.name = `${x.row}E`; break;
        case 6: x.name = `${x.row}F`; break;
        case 7: x.name = `${x.row}G`; break;
      }
      x.color = x.isBooking ? "#727575" : '#dfdfdf';
    });
  }

  onClick(item: SeatModel) {
    if (item.isBooking) {
      return;
    }
    
    let isEnough = this.caculateSeatTicketBooking(item);
    if (!isEnough) {
      return;
    }

    this.listTicket.forEach(x => {
      if (item.idProduct == x.idProduct) {
        x.quantity = item.isChecked ? (x.quantity + 1) : (x.quantity - 1);
      }
    });

    this.listSeats.forEach(x => {
      if (x.id == item.id) {
        x.isChecked = !x.isChecked;
        x.color = x.isChecked ? "#7dc71d" : "#DFDFDF";
      }
    });

    this.paymentSharedService.setListSeats(this.listSeats);
  }

  private caculateSeatTicketBooking(item) {
    for (let index = 0; index < this.listTicket.length; index++) {
      // if (x.idSeatType == item.idSeatType && !item.isCheck && x.quantity == 0) {
      if (item.idProduct == this.listTicket[index].idProduct && !item.isChecked && this.listTicket[index].quantity == 0) {
        return false;
      }
    }
    return true;
  }
}
