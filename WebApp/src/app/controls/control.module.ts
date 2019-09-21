import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BookingTicketComponent } from './booking-ticket/booking-ticket.component';
import { TimeMovieCinemaComponent } from './time-movie-cinema/time-movie-cinema.component';
import { NgSelectModule } from '@ng-select/ng-select';
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PaymentSectionComponent } from './payment-section/payment-section.component';

@NgModule({
  declarations: [
    BookingTicketComponent,
    TimeMovieCinemaComponent,
    PaymentSectionComponent,
  ],
  imports: [
    CommonModule,
    NgSelectModule,
    BrowserAnimationsModule,
    BsDatepickerModule.forRoot(),
  ],
  exports: [
    TimeMovieCinemaComponent,
    BookingTicketComponent,
    PaymentSectionComponent
  ],
})
export class ControlModule { }
