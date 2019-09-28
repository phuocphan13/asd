import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';

@Component({
  selector: 'app-payment-section',
  templateUrl: './payment-section.component.html',
  styleUrls: ['./payment-section.component.scss']
})
export class PaymentSectionComponent implements OnInit {

  @Input() completePrice: number = 0;

  img: string = 'https://revengeofthefans.com/wp-content/uploads/2019/01/Breaking-Bad-RTF-e1548338096892.jpg';
  moviename: any = 'Cranky old man';
  theater: any = 'CGV ';
  showtime: any = '09:00 | Thứ Hai,02/09/2019 ';
  seatnumber: any = '13F';
  constructor() { }

  ngOnInit() {
  }

}
