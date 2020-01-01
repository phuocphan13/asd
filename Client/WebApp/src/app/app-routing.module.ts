import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainViewComponent } from './views/main-view/main-view.component';
import { AuthCallbackComponent } from './core/auth-callback/auth-callback.component';

const routes: Routes = [
  // {
  //   path: '',
  //   component: MainViewComponent,
  //   children: [
  //     {
  //       path: 'offline',
  //       loadChildren: './views/offline-movie-search-view/offline-movie-search-view.module#OfflineMovieSearchViewModule',
  //     },
  //     {
  //       path: 'payment',
  //       loadChildren: './views/payment-view/payment-view.module#PaymentViewModule',
  //     },
  //     {
  //       path: 'film-online',
  //       loadChildren: './views/film-online-view/film-online-view.module#FilmOnlineViewModule',
  //     },
  //   ]
  // },
  {
    path: 'auth-callback',
    component: AuthCallbackComponent
  },
  { path: '**', redirectTo: '', pathMatch: 'full' }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { useHash: true })
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
