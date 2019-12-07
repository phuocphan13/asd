var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidenewsSectionComponent } from './news-content/side-news/side-news.component';
import { SidenewsHalfsizeComponent } from './news-content/side-news-half-size/side-news-half-size.component';
import { MovieNewsViewComponent } from './movie-news-view.component';
import { NgSelectModule } from '@ng-select/ng-select';
import { BsDatepickerModule } from 'ngx-bootstrap';
import { NewsSectionComponent } from './news-content/main-news/main-news.component';
import { NewsContentComponent } from './news-content/news-content.component';
import { NewsHomePageComponent } from './news-home-page/news-home-page.component';
var MovieNewsViewModule = /** @class */ (function () {
    function MovieNewsViewModule() {
    }
    MovieNewsViewModule = __decorate([
        NgModule({
            declarations: [
                SidenewsSectionComponent,
                MovieNewsViewComponent,
                SidenewsHalfsizeComponent,
                NewsSectionComponent,
                NewsHomePageComponent,
                NewsContentComponent
            ],
            imports: [
                NgSelectModule,
                BsDatepickerModule.forRoot(),
                CommonModule
            ],
            exports: [
                MovieNewsViewComponent
            ]
        })
    ], MovieNewsViewModule);
    return MovieNewsViewModule;
}());
export { MovieNewsViewModule };
//# sourceMappingURL=movie-news-view.module.js.map