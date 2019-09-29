import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FilmOnlineViewComponent } from './film-online-view.component';
import { FilmDetailComponent } from './film-detail/film-detail.component';
import { FilmShowingViewComponent } from './film-showing-view/film-showing-view.component';

@NgModule({
    declarations: [
        FilmOnlineViewComponent,
        FilmDetailComponent,
        FilmShowingViewComponent
    ],
    imports: [
        CommonModule,
    ],
    exports: [
    ]
})
export class FilmOnlineViewModule { }
