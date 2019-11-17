var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component, Input } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
var CarouselFilmDetailComponent = /** @class */ (function () {
    function CarouselFilmDetailComponent(_domSanitizer) {
        this._domSanitizer = _domSanitizer;
    }
    CarouselFilmDetailComponent.prototype.ngOnInit = function () {
    };
    __decorate([
        Input("data"),
        __metadata("design:type", Object)
    ], CarouselFilmDetailComponent.prototype, "item", void 0);
    CarouselFilmDetailComponent = __decorate([
        Component({
            selector: 'app-carousel-film-detail',
            templateUrl: './carousel-film-detail.component.html',
            styleUrls: ['./carousel-film-detail.component.scss']
        }),
        __metadata("design:paramtypes", [DomSanitizer])
    ], CarouselFilmDetailComponent);
    return CarouselFilmDetailComponent;
}());
export { CarouselFilmDetailComponent };
//# sourceMappingURL=carousel-film-detail.component.js.map