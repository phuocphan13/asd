import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FilmOnlineViewComponent } from './film-online-view.component';
import { FilmDetailComponent } from './film-detail/film-detail.component';
import { FilmShowingViewComponent } from './film-showing-view/film-showing-view.component';
import { CarouselFilmComponent } from './carousel-film/carousel-film.component';
import { CarouselModule } from 'ngx-bootstrap';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

@NgModule({
    declarations: [
        FilmOnlineViewComponent,
        FilmDetailComponent,
        FilmShowingViewComponent,
        CarouselFilmComponent
    ],
    imports: [
        CommonModule,
        CarouselModule.forRoot(),
        BrowserModule,
        FormsModule,
    ],
    exports: [
        FilmOnlineViewComponent
    ]
})
export class FilmOnlineViewModule { }
