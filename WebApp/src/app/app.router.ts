import { Routes, RouterModule } from "@angular/router";
import { MainViewComponent } from "./views/main-view/main-view.component";
import { OfflineMovieSearchViewComponent } from "./views/offline-movie-search-view/offline-movie-search-view.component";
import { PaymentViewComponent } from "./views/payment-view/payment-view.component";
import { MenuPage } from "./core/common/menu-page";


const appRoutes: Routes = [
    {
        path: 'offline',
        component: OfflineMovieSearchViewComponent,
    },
    {
        path: 'payment',
        component: PaymentViewComponent,       
    },   
]

export const AppRouting = RouterModule.forChild(
    appRoutes
);
