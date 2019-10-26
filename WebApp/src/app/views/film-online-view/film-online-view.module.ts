import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FilmOnlineViewComponent } from './film-online-view.component';
import { FilmShowingViewComponent } from './film-showing-view/film-showing-view.component';
import { CarouselFilmComponent } from './carousel-film/carousel-film.component';
import { CarouselModule } from 'ngx-bootstrap';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CarouselFilmDetailComponent } from './carousel-film-detail/carousel-film-detail.component';
import { NominationFilmDetailComponent } from './nomination-film-detail/nomination-film-detail.component';
import { NominationFilmViewComponent } from './nomination-film-view/nomination-film-view.component';
import { PipeModule } from 'src/app/common/pipes/pipe.module';
import { FilmOnlineViewRoutingModule } from './film-online-view-routing.module';

@NgModule({
    declarations: [
        FilmOnlineViewComponent,
        CarouselFilmDetailComponent,
        FilmShowingViewComponent,
        CarouselFilmComponent,
        NominationFilmDetailComponent,
        NominationFilmViewComponent
    ],
    imports: [
        CommonModule,
        CarouselModule.forRoot(),
        FormsModule,
        NgbModule,
        PipeModule,
        FilmOnlineViewRoutingModule
    ],
    exports: [
        FilmOnlineViewComponent,
    ]
})
export class FilmOnlineViewModule { }
