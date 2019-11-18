import { Component, OnInit } from '@angular/core';
import { PaymentBillModel } from 'src/app/core/model/payment/payment-bill.model';
import { MovieSharedService } from 'src/app/core/services/movie-shared.service';
import { BillModel } from 'src/app/core/model/bill.model';
import { PaymentSharedService } from 'src/app/core/services/payment-shared.service';
import { SeatModel } from 'src/app/core/model/payment/seat.model';


@Component({
  selector: 'app-bill-confirm-modal',
  templateUrl: './bill-confirm-modal.component.html',
  styleUrls: ['./bill-confirm-modal.component.scss']
})
export class BillConfirmModalComponent implements OnInit {


  bill: PaymentBillModel = new PaymentBillModel();
  item: any;
  itemSeat: any;
  total: number;
  listProducts: BillModel[];
  itemSeats: SeatModel[] = new Array(0);

  constructor(private movieSharedService: MovieSharedService,
    private paymentSharedService:PaymentSharedService) { }

  ngOnInit() {
    
    setTimeout(() => {
      this.showData();
    })
  }

  private showData() {
    this.item = this.movieSharedService.item;
    this.itemSeat= this.paymentSharedService.getListSeats().filter(x => x.isChecked && !x.isBooking);
    this.itemSeats=this.itemSeat;
    this.itemSeats
    .forEach(y => {
      switch (y.column) {
        case 1: y.name = `${y.row}A`; break;
        case 2: y.name = `${y.row}B`; break;
        case 3: y.name = `${y.row}C`; break;
        case 4: y.name = `${y.row}D`; break;
        case 5: y.name = `${y.row}E`; break;
        case 6: y.name = `${y.row}F`; break;
        case 7: y.name = `${y.row}G`; break;
      }});
    
    // console.log(this.listProducts);
    // console.log(this.bill);
    console.log(this.itemSeats);
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
