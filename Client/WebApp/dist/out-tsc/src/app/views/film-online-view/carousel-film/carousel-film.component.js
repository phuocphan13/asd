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
import { FilmOnlineService } from 'src/app/core/services/film-online.service';
var CarouselFilmComponent = /** @class */ (function () {
    function CarouselFilmComponent(filmOnlineService) {
        this.filmOnlineService = filmOnlineService;
        this.listShowingIndex = [0, 1, 2, 3, 4];
        this.widthOfFilm = 278;
        this.filmLeftPosition = "0px";
        this.leftNumberValue = 0;
        this.maxLeftValue = 0;
        this.minLeftValue = -834;
        this.numberOfSlideFilms = 3;
        this.title = "HOTEST FILM";
    }
    CarouselFilmComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.filmOnlineService.getListFilmsCarousel().subscribe(function (result) {
            _this.listFilmOnlines = result;
        });
    };
    CarouselFilmComponent.prototype.onClickButtonRight = function () {
        if (this.leftNumberValue > this.minLeftValue) {
            this.leftNumberValue -= this.widthOfFilm * this.numberOfSlideFilms;
            this.filmLeftPosition = this.leftNumberValue + "px";
        }
    };
    CarouselFilmComponent.prototype.onClickButtonLeft = function () {
        if (this.leftNumberValue < this.maxLeftValue) {
            this.leftNumberValue += this.widthOfFilm * this.numberOfSlideFilms;
            this.filmLeftPosition = this.leftNumberValue + "px";
        }
    };
    CarouselFilmComponent = __decorate([
        Component({
            selector: 'app-carousel-film',
            templateUrl: './carousel-film.component.html',
            styleUrls: ['./carousel-film.component.scss']
        }),
        __metadata("design:paramtypes", [FilmOnlineService])
    ], CarouselFilmComponent);
    return CarouselFilmComponent;
}());
export { CarouselFilmComponent };
//# sourceMappingURL=carousel-film.component.js.map