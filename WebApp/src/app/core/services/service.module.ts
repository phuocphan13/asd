import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MovieNewsService } from './movie-news.service'
import { MenuService } from './menu.service';
import { SharedService } from './shared.service';
import { MovieService } from './movie.service';
import {ShowSeatService} from './show-seat.service';
import { SideNewsHalfsizeService } from './side-news-halfsize.service'
import { SideNewsService } from './side-news.service'
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
    ShowSeatService
  ]
})
export class ServiceModule { }
