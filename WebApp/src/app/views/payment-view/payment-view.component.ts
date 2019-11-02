import { Component, OnInit } from '@angular/core';
import { PaymentService } from 'src/app/core/services/payment.service';

@Component({
  selector: 'app-payment-view',
  templateUrl: './payment-view.component.html',
  styleUrls: ['./payment-view.component.scss']
})
export class PaymentViewComponent implements OnInit {

  listItems: any;
  changesTriggerValue = 1;

  constructor( private paymentService: PaymentService) { }

  ngOnInit() {
    this.router.navigateByUrl("payment/booking-seat")
  }

  itemsValueOutPut(event) {
    this.changesTriggerValue++;
    this.listItems = event;
  }
}
