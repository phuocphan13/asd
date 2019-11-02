import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MovieNewsService } from './movie-news.service'
import { MenuService } from './menu.service';
import { SharedService } from './shared.service';
import { MovieService } from './movie.service';

import { FilmOnlineService } from './film-online.service';
import { MovieNewsSharedService } from './movie-news-shared.service';
@NgModule({
  declarations: [
  ],
  providers: [
    MenuService,
    MovieNewsService,
    SharedService,
    MovieService,
    FilmOnlineService,
    MovieNewsSharedService
  ]
})
export class ServiceModule { }
