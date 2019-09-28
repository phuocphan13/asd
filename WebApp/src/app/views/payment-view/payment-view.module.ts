import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PaymentSectionComponent } from './payment-section/payment-section.component';
import { BookingTicketComponent } from './booking-ticket/booking-ticket.component';

@NgModule({
  declarations: [
      BookingTicketComponent,
      PaymentSectionComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    BookingTicketComponent,
    PaymentSectionComponent
  ]
})
export class PaymentViewModule { }
