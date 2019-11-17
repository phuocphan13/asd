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
import { FilmNominationModel } from 'src/app/core/model/film-model/film-nomination.model';
var NominationFilmViewComponent = /** @class */ (function () {
    function NominationFilmViewComponent(filmOnlineService) {
        this.filmOnlineService = filmOnlineService;
    }
    NominationFilmViewComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.filmNomination = new FilmNominationModel();
        this.filmOnlineService.getListFilmsNomination().subscribe(function (result) {
            if (result) {
                _this.filmNomination = result;
                _this.listNominationFilms = result.listFilmNominations;
            }
        });
    };
    NominationFilmViewComponent.prototype.onClickLoadMore = function () {
        var _this = this;
        this.filmOnlineService.getLoadMoreFilmNomination(this.filmNomination.numberFilmNominationCurrent, 7)
            .subscribe(function (result) {
            _this.filmNomination = result;
            result.listFilmNominations.forEach(function (element) {
                _this.listNominationFilms.push(element);
            });
        });
    };
    NominationFilmViewComponent = __decorate([
        Component({
            selector: 'app-nomination-film-view',
            templateUrl: './nomination-film-view.component.html',
            styleUrls: ['./nomination-film-view.component.scss']
        }),
        __metadata("design:paramtypes", [FilmOnlineService])
    ], NominationFilmViewComponent);
    return NominationFilmViewComponent;
}());
export { NominationFilmViewComponent };
//# sourceMappingURL=nomination-film-view.component.js.map