import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MovieNewsService } from './movie-news.service'
import { MenuService } from './menu.service';
import { SharedService } from './shared.service';
import { MovieService } from './movie.service';

import { SideNewsHalfsizeService } from './side-news-halfsize.service'
import { SideNewsService } from './side-news.service'
import { PaymentService } from './payment.service';
import { MovieSharedService } from './movie-shared.service';
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
    PaymentService,
    MovieSharedService
  ]
})
export class ServiceModule { }
