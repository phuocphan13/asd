import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PaymentSectionComponent } from './payment-section/payment-section.component';
import { BookingTicketComponent } from './booking-ticket/booking-ticket.component';
import { FormsModule } from '@angular/forms';
import { PaymentViewComponent } from './payment-view.component';

@NgModule({
  declarations: [
      BookingTicketComponent,
      PaymentSectionComponent,
      PaymentViewComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [
    BookingTicketComponent,
    PaymentSectionComponent,
    PaymentViewComponent
  ]
})
export class PaymentViewModule { }
