var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NewsViewComponent } from './news-view/news-view.component';
import { MovieNewsViewModule } from './movie-news-view/movie-news-view.module';
import { OfflineMovieSearchViewModule } from './offline-movie-search-view/offline-movie-search-view.module';
import { PaymentViewModule } from './payment-view/payment-view.module';
import { FilmOnlineViewModule } from './film-online-view/film-online-view.module';
import { ControlModule } from '../controls/control.module';
import { FormsModule } from '@angular/forms';
import { ModalsModule } from '../modals/modals.module';
var ViewModule = /** @class */ (function () {
    function ViewModule() {
    }
    ViewModule = __decorate([
        NgModule({
            declarations: [
                NewsViewComponent,
            ],
            imports: [
                ControlModule,
                MovieNewsViewModule,
                OfflineMovieSearchViewModule,
                CommonModule,
                PaymentViewModule,
                FilmOnlineViewModule,
                FormsModule,
                ModalsModule
            ],
            entryComponents: [],
            exports: [
                MovieNewsViewModule,
                OfflineMovieSearchViewModule,
                PaymentViewModule,
                FilmOnlineViewModule
            ]
        })
    ], ViewModule);
    return ViewModule;
}());
export { ViewModule };
//# sourceMappingURL=view.module.js.map