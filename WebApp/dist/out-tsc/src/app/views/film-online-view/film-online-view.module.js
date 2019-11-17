var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
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
var FilmOnlineViewModule = /** @class */ (function () {
    function FilmOnlineViewModule() {
    }
    FilmOnlineViewModule = __decorate([
        NgModule({
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
                BrowserModule,
                FormsModule,
                NgbModule,
                PipeModule
            ],
            exports: [
                FilmOnlineViewComponent,
            ]
        })
    ], FilmOnlineViewModule);
    return FilmOnlineViewModule;
}());
export { FilmOnlineViewModule };
//# sourceMappingURL=film-online-view.module.js.map