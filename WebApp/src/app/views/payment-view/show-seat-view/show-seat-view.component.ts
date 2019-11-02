import { Component, OnInit, Input } from '@angular/core';
import { ShowSeatService } from 'src/app/core/services/show-seat.service';
import { SearchSeatModel } from 'src/app/core/model/search-seat.model';
import { SeatBookingModel } from 'src/app/core/model/seat-booking.model';
import { ReverseSeatModel } from 'src/app/core/model/reverse-seat.model';
import {SeatSharedService} from 'src/app/core/services/seat-shared.service';

@Component({
  selector: 'app-show-seat-view',
  templateUrl: './show-seat-view.component.html',
  styleUrls: ['./show-seat-view.component.scss']
})
export class ShowSeatViewComponent implements OnInit {

  @Input("data") item: any;

  text: number = 1;
  listSeats: any;
  rowSeats: [];
  showTimeId: SearchSeatModel = { ShowTime: 1 };

  seatBooking: SeatBookingModel;

  constructor(private showSeatService: ShowSeatService,
    private seatSharedService: SeatSharedService) { }

  ngOnInit() {
    this.seatBooking = new SeatBookingModel();
    this.showSeatService.getShowSeats(this.showTimeId).subscribe(result => {
      this.listSeats = result;
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

  onClick(item) {
    if (item.isBooking) {
      return;
    }
    item.color = "#7dc71d";


    this.seatBooking.idShowTime = 1;
    let seat = new ReverseSeatModel();
    seat.guid = item.guid;
    seat.idSeatType = item.idSeatType;
    this.seatBooking.listReverseSeats.push(seat);
    this.seatSharedService.set(this.seatBooking);
    console.log(seat);
  }

  onClickSaveSeat() {
    // this.seatSharedService.set(this.seatBooking);
    // this.showSeatService.bookingSeat(this.seatBooking).subscribe(result => {
    //   console.log(this.seatBooking);
    //   console.log(result);
    // })
  }

}
