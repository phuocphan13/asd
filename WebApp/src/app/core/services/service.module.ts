import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MovieNewsService } from './movie-news.service'
import { MenuService } from './menu.service';
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
  ]
})
export class ServiceModule { }
