import { Component, OnInit } from '@angular/core';
import { PaymentBillModel } from 'src/app/core/model/payment/payment-bill.model';
import { MovieSharedService } from 'src/app/core/services/movie-shared.service';
import { BillModel } from 'src/app/core/model/bill.model';

@Component({
  selector: 'app-bill-confirm-modal',
  templateUrl: './bill-confirm-modal.component.html',
  styleUrls: ['./bill-confirm-modal.component.scss']
})
export class BillConfirmModalComponent implements OnInit {

  bill: PaymentBillModel = new PaymentBillModel();
  item: any;
  total: number;
  listProducts: BillModel[];

  constructor(private movieSharedService: MovieSharedService) { }

  ngOnInit() {
    setTimeout(() => {
      this.showData();
    })
  }

  private showData() {
    this.item = this.movieSharedService.item;
    console.log(this.listProducts);
    console.log(this.bill);
  }

  onClickSubmit() {
    // this.paymentService.getListBill(this.bill).subscribe(result => {
    //   alert(result);
    // })
  }

  onClickCancel() {

  }

}
