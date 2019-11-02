import { Component, OnInit, Output, EventEmitter, Input, OnChanges } from '@angular/core';
import { BillModel } from 'src/app/core/model/bill.model';
import { PaymentService } from 'src/app/core/services/payment.service';
import { PaymentBillModel } from 'src/app/core/model/payment/payment-bill.model';
import { BillDetailModel } from 'src/app/core/model/payment/bill-detail.model';
import { SharedService } from 'src/app/core/services/shared.service';
import { SearchInformationModel } from 'src/app/core/model/payment/search-information.model';
import { MovieSharedService } from 'src/app/core/services/movie-shared.service';
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
export class PaymentSectionComponent implements OnInit, OnChanges {

  @Input() listItems: BillModel[];
  @Input() changesTrigger: number;

  // img: string = 'https://revengeofthefans.com/wp-content/uploads/2019/01/Breaking-Bad-RTF-e1548338096892.jpg';
  // moviename: string = 'Cranky old man';
  // theater: string = 'CGV';
  // showtime: string = '9:30';
  // // showdate: string = '22/07/2019';
  // seatnumber: string = '13F';

  bill: PaymentBillModel;
  list: any[];
  completedPrice: number = 0;

  item: SearchInformationModel = new SearchInformationModel();
  constructor(private paymentService: PaymentService,
    private movieSharedService: MovieSharedService,
    private sharedService: SharedService) {
  }

  ngOnInit() {
   this.item = this.movieSharedService.item;
  }

  ngOnChanges() {
    if (this.listItems) {
      this.completedPrice = 0;
      this.caculate();
    }
  }

  onClickCheckOut() {
    this.bill.userId = 1;
    this.bill.total = this.completedPrice;
    this.listItems.forEach(x => {
      if (x.quantity !== 0) {
        let billDetail = new BillDetailModel();
        billDetail.serviceId = x.id;
        billDetail.quantity = x.quantity;
        billDetail.price = x.price;
        this.bill.listBillDetails.push(billDetail);
      }
    });
    this.paymentService.getListBill(this.bill).subscribe(result => {
      alert(result);
    })
  }

  private caculate() {
    this.listItems.forEach(x => {
      this.completedPrice += (x.price * x.quantity);
    })
  }
}
