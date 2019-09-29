import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NewsViewComponent } from './news-view/news-view.component';
import { ControlModule } from '../controls/control.module';
import { MovieNewsViewModule } from './movie-news-view/movie-news-view.module';
import { OfflineMovieSearchViewModule } from './offline-movie-search-view/offline-movie-search-view.module';
import { PaymentViewModule } from './payment-view/payment-view.module';
import { FilmOnlineViewModule } from './film-online-view/film-online-view.module';

@NgModule({
  declarations: [
    NewsViewComponent,
  ],
  imports: [
    ControlModule,
    MovieNewsViewModule,
    OfflineMovieSearchViewModule,
    CommonModule,
    PaymentViewModule,
    FilmOnlineViewModule
  ],
  exports: [
    MovieNewsViewModule,
    OfflineMovieSearchViewModule,
    PaymentViewModule
  ]
})
export class ViewModule { }
