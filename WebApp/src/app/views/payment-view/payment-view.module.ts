import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PaymentSectionComponent } from './payment-section/payment-section.component';
import { BookingTicketComponent } from './booking-ticket/booking-ticket.component';
import { FormsModule } from '@angular/forms';
import { PaymentViewComponent } from './payment-view.component';
import { PaymentViewRoutingModule } from './payment-view-routing.module';
import { ShowSeatViewComponent } from './show-seat-view/show-seat-view.component';
import { BillConfirmModalComponent } from './bill-confirm-modal/bill-confirm-modal.component';
import { ModalModule } from 'ngx-bootstrap';


@NgModule({
  declarations: [
    BookingTicketComponent,
    PaymentSectionComponent,
    PaymentViewComponent,
    ShowSeatViewComponent,
    BillConfirmModalComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ModalModule.forRoot(),
    PaymentViewRoutingModule
  ],
  entryComponents: [
    BillConfirmModalComponent
  ],
})
export class PaymentViewModule { }
