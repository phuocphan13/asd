import { Routes, RouterModule } from "@angular/router";
import { NgModule } from "@angular/core";
import { MovieNewsViewComponent } from "./movie-news-view/movie-news-view.component";
import { PaymentViewComponent } from "./payment-view/payment-view.component";
import { OfflineMovieSearchViewComponent } from "./offline-movie-search-view/offline-movie-search-view.component";


const routes: Routes = [
    // {
    //     path: 'news',
    //     component: MovieNewsViewComponent,
    //     children: [
    //         {
    //             path: '',
    //             loadChildren: './app/views/movie-news-view/movie-news-view.module#MovieNewsViewModule',
    //         }
    //     ]
    // },
    // {
    //     path: 'payment',
    //     component: PaymentViewComponent,
    // },
    // {
    //     path: 'offline',
    //     component: OfflineMovieSearchViewComponent,
    // }
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

export class ViewRoutingModule { }