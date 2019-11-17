import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { PaymentService } from 'src/app/core/services/payment.service';
import { PaymentSharedService } from 'src/app/core/services/payment-shared.service';
import { MovieSharedService } from 'src/app/core/services/movie-shared.service';

@Component({
  selector: 'app-booking-ticket',
  templateUrl: './booking-ticket.component.html',
  styleUrls: ['./booking-ticket.component.scss']
})
export class BookingTicketComponent implements OnInit {

  totalPrice: number = 0;
  listCombo: any = [];
  listTicket: any = [];
  bookingStatus: number;

  constructor(private paymentService: PaymentService,
    private movieSharedService: MovieSharedService,
    private paymentSharedService: PaymentSharedService) { }

  ngOnInit() {
    // this.paymentService.getListProducts(this.movieSharedService.item.idCinema).subscribe(result => {
    this.paymentService.getListProducts(1).subscribe(result => {
      result.forEach(element => {
        element.quantity = 0;
      });
      this.listTicket = result.filter(x => x.type === 1) || [];
      this.listCombo = result.filter(x => x.type === 2) || [];
    });
    this.bookingStatus = parseInt(localStorage.getItem("bookingStatus"));
  }

  onChangeTicketValue() {
    let listItems = [];
    this.listTicket.forEach(element => {
      listItems.push(element);
    });
    this.listCombo.forEach(element => {
      listItems.push(element);
    });
    this.paymentSharedService.set(listItems);
  }
}
