var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { NgModule } from '@angular/core';
import { MovieNewsService } from './movie-news.service';
import { MenuService } from './menu.service';
import { SharedService } from './shared.service';
import { MovieService } from './movie.service';
import { SideNewsHalfsizeService } from './side-news-halfsize.service';
import { SideNewsService } from './side-news.service';
import { FilmOnlineService } from './film-online.service';
var ServiceModule = /** @class */ (function () {
    function ServiceModule() {
    }
    ServiceModule = __decorate([
        NgModule({
            declarations: [],
            providers: [
                MenuService,
                SideNewsHalfsizeService,
                MovieNewsService,
                SideNewsService,
                SharedService,
                MovieService,
                FilmOnlineService
            ]
        })
    ], ServiceModule);
    return ServiceModule;
}());
export { ServiceModule };
//# sourceMappingURL=service.module.js.map