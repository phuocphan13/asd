import { Routes, RouterModule } from "@angular/router";
import { NgModule } from "@angular/core";
import { PaymentViewComponent } from "./payment-view.component";
import { BookingTicketComponent } from "./booking-ticket/booking-ticket.component";
import { ShowSeatService } from "src/app/core/services/show-seat.service";
import { ShowSeatViewComponent } from './show-seat-view/show-seat-view.component';
import { Shell } from "src/app/core/shell/shell.service";

const routes: Routes = [
    Shell.childRoutes([{
        path: 'payment',
        component: PaymentViewComponent,
        children: [
            {
                path: 'booking',
                component: BookingTicketComponent
            },
            { 
                path: 'booking-seat', 
                component: ShowSeatViewComponent
            }
        ]
    }])
];

@NgModule({
    imports: [
        RouterModule.forChild(routes)
    ],
    exports: [
        RouterModule
    ],
    providers: [
    ]
})

export class PaymentViewRoutingModule { }