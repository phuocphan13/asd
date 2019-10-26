import { RouterModule } from "@angular/router";
import { OfflineMovieSearchViewComponent } from "./views/offline-movie-search-view/offline-movie-search-view.component";
import { PaymentViewComponent } from "./views/payment-view/payment-view.component";
import { NewsViewComponent } from "./views/news-view/news-view.component";
var appRoutes = [
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
];
export var AppRouting = RouterModule.forChild(appRoutes);
//# sourceMappingURL=app.router.js.map