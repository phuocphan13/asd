import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';

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
  // showtime: object kiểu Date
  seatnumber: string = '13F';
  constructor() { }

  ngOnInit() {
    this.completePrice=0;
  }

}
