import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NewsViewComponent } from './news-view/news-view.component';
import { SidenewsSectionComponent } from './side-news/side-news.component';
import { OfflineMovieSearchViewModule } from './offline-movie-search-view/offline-movie-search-view.module';
import { PaymentViewModule } from './payment-view/payment-view.module';
import { FilmOnlineViewModule } from './film-online-view/film-online-view.module';
import { ControlModule } from '../controls/control.module';

@NgModule({
  declarations: [
    NewsViewComponent,
    SidenewsSectionComponent,
  ],
  imports: [
    ControlModule,
    OfflineMovieSearchViewModule,
    CommonModule,
    PaymentViewModule,
    FilmOnlineViewModule
  ],
  exports: [
    OfflineMovieSearchViewModule,
    PaymentViewModule
  ]
})
export class ViewModule { }
