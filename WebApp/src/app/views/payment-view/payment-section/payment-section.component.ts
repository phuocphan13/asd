import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { ShowSeatService } from 'src/app/core/services/show-seat.service';
import { SeatBookingModel } from 'src/app/core/model/seat-booking.model';
import { ReverseSeatModel } from 'src/app/core/model/reverse-seat.model';
import {SeatSharedService} from 'src/app/core/services/seat-shared.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-payment-section',
  templateUrl: './payment-section.component.html',
  styleUrls: ['./payment-section.component.scss']
})
export class PaymentSectionComponent implements OnInit {

  @Input() completePrice: number;

  img: string = 'https://revengeofthefans.com/wp-content/uploads/2019/01/Breaking-Bad-RTF-e1548338096892.jpg';
  moviename: string = 'Cranky old man';
  theater: string = 'CGV ';
  showtime: string = '09:30';
  showdate: string = '22/07/2019'
  seatnumber: string = '13F';
  seatBooking: SeatBookingModel;

  constructor(private showSeatService: ShowSeatService,
    private seatSharedService: SeatSharedService,
    private router: Router) { }

  ngOnInit() {
    
   
    this.completePrice=0;
  }
  
  checkOut()
  {
    this.seatBooking = this.seatSharedService.get();
    this.showSeatService.bookingSeat(this.seatBooking).subscribe(result => {
      console.log(this.seatBooking);
      console.log(result);
    })
  }

  routing() {
    this.router.navigateByUrl("payment/booking-seat");
  }

}
