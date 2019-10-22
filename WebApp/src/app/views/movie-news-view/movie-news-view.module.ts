import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidenewsSectionComponent } from './news-content/side-news/side-news.component';
import { SidenewsHalfsizeComponent } from './news-content/side-news-half-size/side-news-half-size.component';
import { MovieNewsViewComponent } from './movie-news-view.component';
import { NgSelectModule } from '@ng-select/ng-select';
import { BsDatepickerModule } from 'ngx-bootstrap';
import { MainNewsComponent } from './news-content/main-news/main-news.component';
import { NewsContentComponent } from './news-content/news-content.component'
import { NewsHomePageComponent } from './news-home-page/news-home-page.component'
import { MovieNewsViewRoutingModule } from './movie-news-view-routing.module';

@NgModule({
  declarations: [
    SidenewsSectionComponent,
    MovieNewsViewComponent,
    SidenewsHalfsizeComponent,
    MainNewsComponent,
    NewsHomePageComponent,
    NewsContentComponent
  ],
  imports: [
    NgSelectModule,
    BsDatepickerModule.forRoot(),
    MovieNewsViewRoutingModule,
    CommonModule
  ],
  exports: [
    MovieNewsViewComponent
  ]
})
export class MovieNewsViewModule { }
