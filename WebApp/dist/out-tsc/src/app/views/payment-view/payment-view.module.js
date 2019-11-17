var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PaymentSectionComponent } from './payment-section/payment-section.component';
import { BookingTicketComponent } from './booking-ticket/booking-ticket.component';
import { FormsModule } from '@angular/forms';
import { PaymentViewComponent } from './payment-view.component';
var PaymentViewModule = /** @class */ (function () {
    function PaymentViewModule() {
    }
    PaymentViewModule = __decorate([
        NgModule({
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
    ], PaymentViewModule);
    return PaymentViewModule;
}());
export { PaymentViewModule };
//# sourceMappingURL=payment-view.module.js.map