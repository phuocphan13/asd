var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
var FilmOnlineService = /** @class */ (function () {
    function FilmOnlineService(httpClient) {
        this.httpClient = httpClient;
        this.homeAddress = 'api/Film';
        this.apiHost = "http://localhost:59239";
    }
    FilmOnlineService.prototype.getListFilmsCarousel = function () {
        return this.httpClient.get(this.apiHost + "/" + this.homeAddress + "/GetListFilmsCarousel");
    };
    FilmOnlineService.prototype.getListFilmsNomination = function () {
        return this.httpClient.get(this.apiHost + "/" + this.homeAddress + "/GetListFilmsNomination");
    };
    FilmOnlineService.prototype.getLoadMoreFilmNomination = function (numberFilmNominationCurrent, numberFilmNominationTake) {
        var params = new HttpParams().set('numberFilmNominationCurrent', numberFilmNominationCurrent)
            .set("numberFilmNominationTake", numberFilmNominationTake);
        return this.httpClient.get(this.apiHost + "/" + this.homeAddress + "/GetLoadMoreFilmNomination", { params: params });
    };
    FilmOnlineService = __decorate([
        Injectable(),
        __metadata("design:paramtypes", [HttpClient])
    ], FilmOnlineService);
    return FilmOnlineService;
}());
export { FilmOnlineService };
//# sourceMappingURL=film-online.service.js.map