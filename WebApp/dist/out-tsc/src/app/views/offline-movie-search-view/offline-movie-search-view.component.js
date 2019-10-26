var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component } from '@angular/core';
import { MenuService } from 'src/app/core/services/menu.service';
import { MovieService } from 'src/app/core/services/movie.service';
var OfflineMovieSearchViewComponent = /** @class */ (function () {
    function OfflineMovieSearchViewComponent(menuService, movieService) {
        this.menuService = menuService;
        this.movieService = movieService;
        this.listMovies = [];
    }
    OfflineMovieSearchViewComponent.prototype.ngOnInit = function () {
    };
    OfflineMovieSearchViewComponent.prototype.outputData = function (event) {
        var _this = this;
        this.movieService.getListMovies(event).subscribe(function (result) {
            _this.listMovies = result;
            //Logic
        });
    };
    OfflineMovieSearchViewComponent = __decorate([
        Component({
            selector: 'app-offline-movie-search-view',
            templateUrl: './offline-movie-search-view.component.html',
            styleUrls: ['./offline-movie-search-view.component.scss']
        }),
        __metadata("design:paramtypes", [MenuService,
            MovieService])
    ], OfflineMovieSearchViewComponent);
    return OfflineMovieSearchViewComponent;
}());
export { OfflineMovieSearchViewComponent };
//# sourceMappingURL=offline-movie-search-view.component.js.map