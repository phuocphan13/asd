import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-payment-view',
  templateUrl: './payment-view.component.html',
  styleUrls: ['./payment-view.component.scss']
})
export class PaymentViewComponent implements OnInit {

  completePrice: any;

  constructor() { }

  ngOnInit() {
  }

  ItemsValueOutPut(event) {
    this.completePrice = event;
  }
}
