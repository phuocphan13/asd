import { Component, OnInit, Output, EventEmitter, Input, OnChanges } from '@angular/core';
import { BillModel } from 'src/app/core/model/bill.model';
import { PaymentService } from 'src/app/core/services/payment.service';

@Component({
  selector: 'app-payment-section',
  templateUrl: './payment-section.component.html',
  styleUrls: ['./payment-section.component.scss']
})
export class PaymentSectionComponent implements OnInit, OnChanges {
  @Input() listItems: BillModel[];

  img: string = 'https://revengeofthefans.com/wp-content/uploads/2019/01/Breaking-Bad-RTF-e1548338096892.jpg';
  moviename: string = 'Cranky old man';
  theater: string = 'CGV ';
  showtime: string = '09:30';
  showdate: string = '22/07/2019';
  seatnumber: string = '13F';

  bills: BillModel[];
  list: any[];
  completedPrice: number = 0;

  constructor(private paymentService: PaymentService) { }

  ngOnInit() {

  }

  ngOnChanges() {
    if (this.listItems) {
      this.caculate();
    }
  }

  checkOut() {
    this.paymentService.getListBill(this.listItems).subscribe(result => {
      this.list = result;
    })
    // alert("ready to use!!");
  }

  private caculate() {
    this.listItems.forEach(x => {
      this.completedPrice += (x.price * x.quantity);
    })
  }
}
