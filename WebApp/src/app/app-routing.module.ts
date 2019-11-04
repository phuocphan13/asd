import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainViewComponent } from './views/main-view/main-view.component';

const routes: Routes = [
  {
    path: '',
    component: MainViewComponent,
    children: [
      {
        path: 'offline',
        loadChildren: './views/offline-movie-search-view/offline-movie-search-view.module#OfflineMovieSearchViewModule',
      },
      {
        path: 'payment',
        loadChildren: './views/payment-view/payment-view.module#PaymentViewModule',
      },
      {
        path: 'news',
        loadChildren: './views/movie-news-view/movie-news-view.module#MovieNewsViewModule',
      },
    ]
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { useHash: true, scrollPositionRestoration: 'enabled' })

  ],
  providers: [
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
