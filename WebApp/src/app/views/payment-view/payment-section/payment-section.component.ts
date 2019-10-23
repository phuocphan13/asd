import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
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

  constructor(private router: Router) { }

  ngOnInit() {
    this.completePrice = 0;
  }

  checkOut() {
    alert("ready to use!!");
  }

  routing() {
    this.router.navigateByUrl("payment/booking-seat");
  }

}
