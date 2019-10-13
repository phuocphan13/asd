import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NewsViewComponent } from './news-view/news-view.component';
import { MovieNewsViewModule } from './movie-news-view/movie-news-view.module';
import { OfflineMovieSearchViewModule } from './offline-movie-search-view/offline-movie-search-view.module';
import { PaymentViewModule } from './payment-view/payment-view.module';
import { FilmOnlineViewModule } from './film-online-view/film-online-view.module';
import { ControlModule } from '../controls/control.module';
import { ShowSeatViewComponent } from './show-seat-view/show-seat-view.component';
import { ShowSeatViewModule } from './show-seat-view/show-seat-view.module';

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
    FilmOnlineViewModule,
    ShowSeatViewModule
  ],
  exports: [
    MovieNewsViewModule,
    OfflineMovieSearchViewModule,
    PaymentViewModule,
    ShowSeatViewModule
  ]
})
export class ViewModule { }
