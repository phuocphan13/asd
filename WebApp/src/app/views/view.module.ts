import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NewsViewComponent } from './news-view/news-view.component';
import { SidenewsSectionComponent } from './side-news/side-news.component';
import { ControlModule } from '../controls/control.module';
import { OfflineMovieSearchViewModule } from './offline-movie-search-view/offline-movie-search-view.module';
import { NgSelectModule } from '@ng-select/ng-select';

@NgModule({
  declarations: [
    NewsViewComponent,
    SidenewsSectionComponent,
  ],
  imports: [
    ControlModule,
    OfflineMovieSearchViewModule,
    CommonModule,
  ],
  exports: [
    OfflineMovieSearchViewModule
  ]
})
export class ViewModule { }
