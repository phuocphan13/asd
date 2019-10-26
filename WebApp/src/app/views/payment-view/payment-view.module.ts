import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PaymentSectionComponent } from './payment-section/payment-section.component';
import { BookingTicketComponent } from './booking-ticket/booking-ticket.component';
import { FormsModule } from '@angular/forms';
import { PaymentViewComponent } from './payment-view.component';
import { PaymentViewRoutingModule } from './payment-view-routing.module';
@NgModule({
  declarations: [
      BookingTicketComponent,
      PaymentSectionComponent,
      PaymentViewComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    PaymentViewRoutingModule
  ],
  exports: [
    BookingTicketComponent,
    PaymentSectionComponent,
    PaymentViewComponent
  ]
})
export class PaymentViewModule { }
