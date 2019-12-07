var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component, Output, EventEmitter } from '@angular/core';
import { SearchModel } from 'src/app/core/model/search.model';
import { Router } from '@angular/router';
var TimeMovieCinemaComponent = /** @class */ (function () {
    function TimeMovieCinemaComponent(router) {
        this.router = router;
        this.searchData = new EventEmitter();
        this.listMovies = [
            { id: 1, name: 'NGÔI NHÀ BƯƠM BƯỚM' },
            { id: 2, name: 'BẠN HỌC CÕI ÂM' },
            { id: 3, name: 'ANH THẦY NGÔI SAO' },
            { id: 4, name: 'ANGRY BIRDS 2' },
        ];
        this.listCinemas = [
            { id: 1, name: 'BHD Star Bitexco' },
            { id: 2, name: 'GLX - Nguyễn Du' },
            { id: 3, name: 'BHD Star Vincom Thảo Điền' },
            { id: 4, name: 'GLX - Tân Bình' },
        ];
        this.minDate = new Date();
        this.searchItem = new SearchModel();
    }
    TimeMovieCinemaComponent.prototype.ngOnInit = function () {
    };
    TimeMovieCinemaComponent.prototype.onChangeMovieName = function (event) {
        this.searchItem.movieId = event.id;
    };
    TimeMovieCinemaComponent.prototype.onChangeCinemaName = function (event) {
        this.searchItem.cinemaId = event.id;
    };
    TimeMovieCinemaComponent.prototype.onClickSearch = function () {
        this.searchData.emit(this.searchItem);
    };
    __decorate([
        Output(),
        __metadata("design:type", Object)
    ], TimeMovieCinemaComponent.prototype, "searchData", void 0);
    TimeMovieCinemaComponent = __decorate([
        Component({
            selector: 'app-time-movie-cinema',
            templateUrl: './time-movie-cinema.component.html',
            styleUrls: ['./time-movie-cinema.component.scss']
        }),
        __metadata("design:paramtypes", [Router])
    ], TimeMovieCinemaComponent);
    return TimeMovieCinemaComponent;
}());
export { TimeMovieCinemaComponent };
//# sourceMappingURL=time-movie-cinema.component.js.map