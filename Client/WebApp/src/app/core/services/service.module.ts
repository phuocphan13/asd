import { NgModule } from '@angular/core';
import { MovieNewsService } from './movie-news.service'
import { MenuService } from './menu.service';
import { SharedService } from './shared.service';
import { MovieService } from './movie.service';
import { ShowSeatService } from './show-seat.service';
import { PaymentService } from './payment.service';
import { MovieSharedService } from './movie-shared.service';
import { FilmOnlineService } from './film-online.service';
import { SeatSharedService } from './seat-shared.service';
import { MovieNewsSharedService } from './movie-news-shared.service';
import { SearchMovieSharedService } from './search-movie-shared.service';
import { ShowMovieSharedService } from './show-movie-shared.service';
import { PaymentSharedService } from './payment-shared.service';

import { FilmOnlineShareService } from './film-online-shared.service';
import { AuthService } from './auth.service';
import { ConfigService } from 'src/app/shared/config.service';
@NgModule({
  declarations: [
  ],
  providers: [
    MenuService,
    MovieNewsService,
    SharedService,
    MovieService,
    MovieNewsSharedService,
    FilmOnlineService,
    SeatSharedService,
    ShowSeatService,
    PaymentService,
    MovieSharedService,
    SearchMovieSharedService,
    ShowMovieSharedService,
    PaymentSharedService,
    FilmOnlineShareService,
    AuthService,
    ConfigService
  ]
})
export class ServiceModule { }
