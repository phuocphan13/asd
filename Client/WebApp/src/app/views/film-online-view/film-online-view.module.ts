import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FilmOnlineViewComponent } from './film-online-view.component';
import { CarouselFilmComponent } from './carousel-film/carousel-film.component';
import { CarouselModule, ProgressbarModule } from 'ngx-bootstrap';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CarouselFilmDetailComponent } from './carousel-film/carousel-film-detail/carousel-film-detail.component';
import { NominationFilmDetailComponent } from './nomination-film-view/nomination-film-detail/nomination-film-detail.component';
import { NominationFilmViewComponent } from './nomination-film-view/nomination-film-view.component';
import { PipeModule } from 'src/app/common/pipes/pipe.module';
import { FilmOnlineViewRoutingModule } from './film-online-view-routing.module';
import { FilmOnlineDetailViewComponent } from './film-online-detail-view/film-online-detail-view.component';
import { FilmOnlineHomeViewComponent } from './film-online-home-view/film-online-home-view.component';
import { FilmOnlinePosterDetailComponent } from './film-online-detail-view/film-online-poster-detail/film-online-poster-detail.component';
import { AlertModule } from 'ngx-alerts';
import { FilmOnlineRecentlyDetailComponent } from './film-online-detail-view/film-online-recently-detail/film-online-recently-detail.component';
import { NgSelectModule } from '@ng-select/ng-select';
import { CommonComponentModule } from 'src/app/common/components/common-component.module';
import { ShellModule } from 'src/app/core/shell/shell.module';

@NgModule({
    declarations: [
        FilmOnlineViewComponent,
        CarouselFilmDetailComponent,
        CarouselFilmComponent,
        NominationFilmDetailComponent,
        NominationFilmViewComponent,
        FilmOnlineDetailViewComponent,
        FilmOnlineHomeViewComponent,
        FilmOnlinePosterDetailComponent,
        FilmOnlineRecentlyDetailComponent
    ],
    imports: [
        NgSelectModule,
        CommonModule,
        CarouselModule.forRoot(),
        FormsModule,
        NgbModule,
        PipeModule,
        ShellModule,
        FilmOnlineViewRoutingModule,
        CommonComponentModule,
        ProgressbarModule.forRoot(),
        AlertModule.forRoot({ maxMessages: 5, timeout: 2000, position: 'right' }),
    ],
    exports: [
        FilmOnlineViewComponent,
    ],
    providers: [
    ]
})
export class FilmOnlineViewModule { }
