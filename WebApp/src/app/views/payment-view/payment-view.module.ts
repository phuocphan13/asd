import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PaymentSectionComponent } from './payment-section/payment-section.component';
import { BookingTicketComponent } from './booking-ticket/booking-ticket.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
      BookingTicketComponent,
      PaymentSectionComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [
    BookingTicketComponent,
    PaymentSectionComponent
  ]
})
export class PaymentViewModule { }
