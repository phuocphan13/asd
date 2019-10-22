import { Routes, RouterModule } from "@angular/router";
import { MainViewComponent } from "./views/main-view/main-view.component";
import { OfflineMovieSearchViewComponent } from "./views/offline-movie-search-view/offline-movie-search-view.component";
import { PaymentViewComponent } from "./views/payment-view/payment-view.component";
import { MenuPage } from "./core/common/menu-page";
import { NewsViewComponent } from "./views/news-view/news-view.component";
import { NgModule } from "@angular/core";



const appRoutes: Routes = [
    {
        path: '', 
        component: MainViewComponent,
        children: [
            {
                path: '',
                loadChildren: './views/movie-news-view/movie-news-view.module#MovieNewsViewModule',
            }
        ]
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

@NgModule({
    imports: [
        RouterModule.forRoot(appRoutes, { useHash: true })
    ],
    providers: [
    ],
    exports: [
        RouterModule
    ]
})

export class AppRoutingModule { }