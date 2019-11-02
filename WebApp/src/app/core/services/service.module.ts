import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MovieNewsService } from './movie-news.service'
import { MenuService } from './menu.service';
import { SharedService } from './shared.service';
import { MovieService } from './movie.service';

import { SideNewsHalfsizeService } from './side-news-halfsize.service'
import { SideNewsService } from './side-news.service'
import { FilmOnlineService } from './film-online.service';
import { MovieNewsSharedService } from './movie-news-shared.service';
import { FilmOnlineShareService } from './film-online-shared.service';
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
    FilmOnlineService,
    MovieNewsSharedService,
    FilmOnlineShareService
  ]
})
export class ServiceModule { }
