import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MovieNewsService } from './movie-news.service'
import { MenuService } from './menu.service';
import { SharedService } from './shared.service';
import { MovieService } from './movie.service';
import {ShowSeatService} from './show-seat.service';
import { SideNewsHalfsizeService } from './side-news-halfsize.service'
import { SideNewsService } from './side-news.service'
import { FilmOnlineService } from './film-online.service';
import { SeatSharedService } from './seat-shared.service';
import { MovieNewsSharedService } from './movie-news-shared.service';
@NgModule({
  declarations: [
  ],
  providers: [
    MenuService,
    SideNewsHalfsizeService,
    MovieNewsService,
    SideNewsService,
    SharedService,
    MovieService,

    MovieNewsSharedService
    FilmOnlineService,
    SeatSharedService,
    ShowSeatService
  ]
})
export class ServiceModule { }
