var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { Injectable, EventEmitter } from '@angular/core';
var SharedService = /** @class */ (function () {
    function SharedService() {
        this.data = new EventEmitter();
    }
    SharedService.prototype.get = function () {
        return this.amount;
    };
    SharedService.prototype.set = function (value) {
        this.amount = value;
    };
    SharedService.prototype.setData = function (value) {
        this.data.emit(value);
    };
    SharedService = __decorate([
        Injectable()
    ], SharedService);
    return SharedService;
}());
export { SharedService };
//# sourceMappingURL=shared.service.js.map