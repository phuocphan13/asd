import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MovieViewComponent } from './movie-view/movie-view.component';
import { OnlineMoviesCenterViewComponent } from '../offline-movie-search-view/online-movies-center-view/online-movies-center-view.component';
import { OfflineMovieSearchViewComponent } from '../offline-movie-search-view/offline-movie-search-view.component';
import { TimeMovieCinemaComponent } from './time-movie-cinema/time-movie-cinema.component';
import { NgSelectModule } from '@ng-select/ng-select';
import { BsDatepickerModule } from 'ngx-bootstrap';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    MovieViewComponent,
    OnlineMoviesCenterViewComponent,
    OfflineMovieSearchViewComponent,
    TimeMovieCinemaComponent
  ],
  imports: [
    NgSelectModule,
    BsDatepickerModule.forRoot(),
    CommonModule,
    FormsModule
  ],
  exports: [
    OfflineMovieSearchViewComponent
  ]
})
export class OfflineMovieSearchViewModule { }
