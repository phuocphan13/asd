import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { PaymentService } from 'src/app/core/services/payment.service';
import { PaymentSharedService } from 'src/app/core/services/payment-shared.service';

@Component({
  selector: 'app-booking-ticket',
  templateUrl: './booking-ticket.component.html',
  styleUrls: ['./booking-ticket.component.scss']
})
export class BookingTicketComponent implements OnInit {

  totalPrice: number = 0;
  listCombo: any = [];
  listTicket: any = []

  constructor(private paymentService: PaymentService,
    private paymentSharedService: PaymentSharedService) { }

  ngOnInit() {
    this.paymentService.getAll().subscribe(result => {
      this.listTicket = result.splice(0, 7);
      this.listCombo = result;
    });
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
