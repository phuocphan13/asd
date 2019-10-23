import { Routes, RouterModule } from "@angular/router";
import { MainViewComponent } from "./views/main-view/main-view.component";
import { NgModule } from "@angular/core";

const appRoutes: Routes = [
    {
        path: '',
        component: MainViewComponent,
        children: [
            {
                path: 'news',
                loadChildren: './views/movie-news-view/movie-news-view.module#MovieNewsViewModule',
            },
            {
                path: 'payment',
                loadChildren: './views/payment-view/payment-view.module#PaymentViewModule',
            },
            {
                path: 'film-online',
                loadChildren: './views/film-online-view/film-online-view.module#FilmOnlineViewModule',
            }
        ]
    },
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