import { Component, OnInit, Output, EventEmitter, Input, OnChanges, OnDestroy } from '@angular/core';
import { BillModel } from 'src/app/core/model/bill.model';
import { PaymentService } from 'src/app/core/services/payment.service';
import { PaymentBillModel } from 'src/app/core/model/payment/payment-bill.model';
import { BillDetailModel } from 'src/app/core/model/payment/bill-detail.model';
import { SearchInformationModel } from 'src/app/core/model/payment/search-information.model';
import { MovieSharedService } from 'src/app/core/services/movie-shared.service';
import { Router } from '@angular/router';
import { PaymentSharedService } from 'src/app/core/services/payment-shared.service';
import { forEach } from '@angular/router/src/utils/collection';
import { ReverseSeatModel } from 'src/app/core/model/reverse-seat.model';
import { empty } from 'rxjs';
import { SeatTicketBookingModel } from 'src/app/core/model/payment/seat-ticket-booking.model';
import { BsModalRef, BsModalService } from 'ngx-bootstrap';
import { BillConfirmModalComponent } from '../bill-confirm-modal/bill-confirm-modal.component';

@Component({
  selector: 'app-payment-section',
  templateUrl: './payment-section.component.html',
  styleUrls: ['./payment-section.component.scss']
})
export class PaymentSectionComponent implements OnInit, OnDestroy {

  listItems: BillModel[];
  changesTrigger: number;
  paymentStatus: number;
  completedPrice: number = 0;

  listGUID: ReverseSeatModel[] = new Array(0);
  list: any[];


  bill: PaymentBillModel = new PaymentBillModel();
  item: SearchInformationModel = new SearchInformationModel();
  
  modalRef: BsModalRef;

  constructor(private paymentService: PaymentService,
    private paymentSharedService: PaymentSharedService,
    private router: Router,
    private modalService: BsModalService,
    private movieSharedService: MovieSharedService) {
  }

  ngOnInit() {
    this.item = this.movieSharedService.item;
    this.paymentStatus = parseInt(localStorage.getItem("paymentStatus"));
    this.registerEvents();
  }

  ngOnDestroy() {
    this.paymentSharedService.caculationChange.unsubscribe();
  }

  private registerEvents() {
    this.paymentSharedService.caculationChange.subscribe(result => {
      if (result) {
        this.listItems = result;
        this.completedPrice = 0;
        this.caculate();
      }
    });
  }

  onClickCheckOut() {
    this.bill.userId = 1;
    this.bill.total = this.completedPrice;

    let listSeats = this.paymentSharedService.getListSeats().filter(x => x.isChecked && !x.isBooking);
    listSeats.forEach(x => {
      let reservedSeat = new ReverseSeatModel();
      reservedSeat.guid = x.guid;
      reservedSeat.idProduct = x.idProduct;
      this.bill.listSeats.push(reservedSeat);
    })

    this.bill.idShowTime = this.item.idShowTime;
    this.listItems.forEach(x => {
      if (x.quantity !== 0) {
        let billDetail = new BillDetailModel();
        billDetail.serviceId = x.id;
        billDetail.quantity = x.quantity;
        billDetail.price = x.price;
        this.bill.listBillDetails.push(billDetail);
      }
    });

    this.showBillDetail();
  }

  onClickContinue() {
    let listSeatTicketBookings: SeatTicketBookingModel[] = new Array(0);
    this.listItems.filter(x => {
      if (x.type === 1 && x.quantity > 0) {
        let seatTicketBooking = new SeatTicketBookingModel();
        seatTicketBooking.name = x.name;
        seatTicketBooking.quantity = x.quantity;
        seatTicketBooking.idProduct = x.idProduct;
        listSeatTicketBookings.push(seatTicketBooking);
      }
    });
    this.paymentSharedService.setNumberTicket(listSeatTicketBookings);
    this.paymentStatus = 2;
    this.router.navigateByUrl("payment/booking-seat");
  }

  private caculate() {
    this.listItems.forEach(x => {
      this.completedPrice += (x.price * x.quantity);
    })
  }

  private showBillDetail() {
    this.modalRef = this.modalService.show(BillConfirmModalComponent, {
      ignoreBackdropClick: true
    });
    this.modalRef.content.bill = this.bill;
    this.modalRef.content.total = this.completedPrice;
    this.modalRef.content.listProducts = this.listItems;
  }
}
