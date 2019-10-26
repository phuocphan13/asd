import { Routes, RouterModule } from "@angular/router";
import { NgModule } from "@angular/core";
import { PaymentViewComponent } from "./payment-view.component";
import { BookingTicketComponent } from "./booking-ticket/booking-ticket.component";

const routes: Routes = [
    {
        path: '',
        component: PaymentViewComponent,
        children: [
            {
                path: '',
                component: BookingTicketComponent
            },
            { 
                path: 'booking-seat', 
                // component: ShowSeatComponent
            }
        ]
    }
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