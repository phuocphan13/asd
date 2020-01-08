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
var DropDownComponent = /** @class */ (function () {
    function DropDownComponent() {
    }
    DropDownComponent.prototype.ngOnInit = function () {
    };
    __decorate([
        Input('items'),
        __metadata("design:type", Array)
    ], DropDownComponent.prototype, "listItems", void 0);
    __decorate([
        Input('title'),
        __metadata("design:type", String)
    ], DropDownComponent.prototype, "title", void 0);
    DropDownComponent = __decorate([
        Component({
            selector: 'app-drop-down',
            templateUrl: './drop-down.component.html',
            styleUrls: ['./drop-down.component.scss']
        }),
        __metadata("design:paramtypes", [])
    ], DropDownComponent);
    return DropDownComponent;
}());
export { DropDownComponent };
//# sourceMappingURL=drop-down.component.js.map