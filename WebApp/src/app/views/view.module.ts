import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MovieViewComponent } from './movie-view/movie-view.component';
import { NewsViewComponent } from './news-view/news-view.component';
import { OnlineMoviesCenterViewComponent } from './online-movies-center-view/online-movies-center-view.component';
import { PaymentSectionComponent } from '../controls/payment-section/payment-section.component';
import { OfflineMovieSearchViewComponent } from './offline-movie-search-view/offline-movie-search-view.component';
import { ControlModule } from '../controls/control.module';

@NgModule({
  declarations: [
    MovieViewComponent,
    NewsViewComponent,
    OnlineMoviesCenterViewComponent,
    OfflineMovieSearchViewComponent
  ],
  imports: [
    ControlModule,
    CommonModule
  ],
  exports: [
    OfflineMovieSearchViewComponent
  ]
})
export class ViewModule { }
