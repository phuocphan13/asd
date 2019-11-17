var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MovieViewComponent } from './movie-view/movie-view.component';
import { OnlineMoviesCenterViewComponent } from '../offline-movie-search-view/online-movies-center-view/online-movies-center-view.component';
import { OfflineMovieSearchViewComponent } from '../offline-movie-search-view/offline-movie-search-view.component';
import { TimeMovieCinemaComponent } from './time-movie-cinema/time-movie-cinema.component';
import { NgSelectModule } from '@ng-select/ng-select';
import { BsDatepickerModule } from 'ngx-bootstrap';
import { FormsModule } from '@angular/forms';
var OfflineMovieSearchViewModule = /** @class */ (function () {
    function OfflineMovieSearchViewModule() {
    }
    OfflineMovieSearchViewModule = __decorate([
        NgModule({
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
    ], OfflineMovieSearchViewModule);
    return OfflineMovieSearchViewModule;
}());
export { OfflineMovieSearchViewModule };
//# sourceMappingURL=offline-movie-search-view.module.js.map