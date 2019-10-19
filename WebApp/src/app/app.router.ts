import { Routes, RouterModule } from "@angular/router";
import { MainViewComponent } from "./views/main-view/main-view.component";
import { OfflineMovieSearchViewComponent } from "./views/offline-movie-search-view/offline-movie-search-view.component";
import { PaymentViewComponent } from "./views/payment-view/payment-view.component";
import { MenuPage } from "./core/common/menu-page";
import { NewsViewComponent } from "./views/news-view/news-view.component";



const appRoutes: Routes = [
    {
        path: '',
        component: OfflineMovieSearchViewComponent,
    },
    {
        path: 'payment',
        component: PaymentViewComponent,
        children: [
            {
                path: 'abc',
                component: PaymentViewComponent,
                children: [
                    {
                        path: 'abc',
                        component: PaymentViewComponent,
                    }
                ]
            },
            {
                path: 'aaa',
                component: PaymentViewComponent,
            }
        ]
    },
    {
        path: 'news',
        component: NewsViewComponent,
    }
    // {
    //     path: 'home/:brandId',
    //     component: HomeComponent
    // },
    // {
    //     path: 'temp-of-use',
    //     component: TempOfUseComponent,
    // },
    // {
    //     path: "accept-push-message",
    //     component: AcceptPushMessageComponent,
    // }
]

export const AppRouting = RouterModule.forChild(
    appRoutes
);
