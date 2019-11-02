import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidenewsComponent } from './side-news/side-news.component';
import { MovieNewsViewComponent } from './movie-news-view.component';
import { NgSelectModule } from '@ng-select/ng-select';
import { BsDatepickerModule } from 'ngx-bootstrap';
import { MainNewsComponent } from './main-news/main-news.component';
import { NewsHomePageComponent } from './news-home-page/news-home-page.component';
import { MovieNewsViewRoutingModule } from './movie-news-view-routing.module';
import { CommonComponentModule } from 'src/app/common/components/common-component.module';

@NgModule({
  declarations: [
    SidenewsComponent,
    MovieNewsViewComponent,
    MainNewsComponent,
    NewsHomePageComponent,
  ],
  imports: [
    NgSelectModule,
    BsDatepickerModule.forRoot(),
    CommonModule,
    MovieNewsViewRoutingModule,
    CommonComponentModule,
  ],
  exports: [
    MovieNewsViewComponent
  ]
})
export class MovieNewsViewModule { }
