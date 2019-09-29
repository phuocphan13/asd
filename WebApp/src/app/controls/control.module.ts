import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BookingTicketComponent } from '../views/payment-view/booking-ticket/booking-ticket.component';
import { NgSelectModule } from '@ng-select/ng-select';
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
  ],
  imports: [
    FormsModule,
    CommonModule,
    BrowserAnimationsModule,
  ],
  exports: [
  ],
})
export class ControlModule { }
