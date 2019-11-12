import { Component, OnInit } from '@angular/core';
import { PaymentBillModel } from 'src/app/core/model/payment/payment-bill.model';
import { MovieSharedService } from 'src/app/core/services/movie-shared.service';
import { BillModel } from 'src/app/core/model/bill.model';
import { BsModalRef } from 'ngx-bootstrap';
import { PaymentService } from 'src/app/core/services/payment.service';

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

  constructor(private movieSharedService: MovieSharedService,
    private bsModalRef: BsModalRef,
    private paymentService: PaymentService) { }

  ngOnInit() {
    setTimeout(() => {
      this.showData();
    })
  }

  private showData() {
    this.item = this.movieSharedService.item;
    
    console.log(this.bill);
  }

  onClickSubmit() {
    this.paymentService.getListBill(this.bill).subscribe(result => {
      alert(result);
    })
  }

  onClickCancel() {
    this.closeModal();
  }
  private closeModal() {
    this.bsModalRef.hide();
  }
}
