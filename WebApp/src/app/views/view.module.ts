import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NewsViewComponent } from './news-view/news-view.component';
import { MovieNewsViewModule } from './movie-news-view/movie-news-view.module';
import { OfflineMovieSearchViewModule } from './offline-movie-search-view/offline-movie-search-view.module';
import { PaymentViewModule } from './payment-view/payment-view.module';
import { FilmOnlineViewModule } from './film-online-view/film-online-view.module';
import { ControlModule } from '../controls/control.module';
import { PaymentViewComponent } from './payment-view/payment-view.component';
import { LoginModalComponent } from '../modals/login/login.modal.component';
import { FormsModule } from '@angular/forms';
import { ForgottenModalComponent } from '../modals/forgotten/forgotten.modal.component';
import { ModalsModule } from '../modals/modals.module';

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
    FormsModule,
    ModalsModule
  ],
  entryComponents: [
  ],
  exports: [
    MovieNewsViewModule,
    OfflineMovieSearchViewModule,
    PaymentViewModule,
    FilmOnlineViewModule
  ]
})
export class ViewModule { }
