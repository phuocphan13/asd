import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-payment-view',
  templateUrl: './payment-view.component.html',
  styleUrls: ['./payment-view.component.scss']
})
export class PaymentViewComponent implements OnInit {

  completePrice: any;

  constructor(private router:Router) { }

  ngOnInit() {
    this.router.navigateByUrl("payment/booking-seat")
  }

  ItemsValueOutPut(event) {
    this.completePrice = event;
  }
}
