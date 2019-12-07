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
import { ItemShowingEnum } from 'src/app/core/enum/item-showing.enum';
import { DomSanitizer } from '@angular/platform-browser';
var ItemShowingComponent = /** @class */ (function () {
    function ItemShowingComponent(_domSanitizer) {
        this._domSanitizer = _domSanitizer;
    }
    ItemShowingComponent.prototype.ngOnInit = function () {
        console.log(this.type);
    };
    __decorate([
        Input("data"),
        __metadata("design:type", Object)
    ], ItemShowingComponent.prototype, "item", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Number)
    ], ItemShowingComponent.prototype, "type", void 0);
    ItemShowingComponent = __decorate([
        Component({
            selector: 'app-item-showing',
            templateUrl: './item-showing.component.html',
            styleUrls: ['./item-showing.component.scss']
        }),
        __metadata("design:paramtypes", [DomSanitizer])
    ], ItemShowingComponent);
    return ItemShowingComponent;
}());
export { ItemShowingComponent };
//# sourceMappingURL=item-showing.component.js.map