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
var PaymentSectionComponent = /** @class */ (function () {
    function PaymentSectionComponent() {
        this.img = 'https://revengeofthefans.com/wp-content/uploads/2019/01/Breaking-Bad-RTF-e1548338096892.jpg';
        this.moviename = 'Cranky old man';
        this.theater = 'CGV ';
        this.showtime = '09:30';
        this.showdate = '22/07/2019';
        this.seatnumber = '13F';
    }
    PaymentSectionComponent.prototype.ngOnInit = function () {
        this.completePrice = 0;
    };
    PaymentSectionComponent.prototype.checkOut = function () {
        alert("ready to use!!");
    };
    __decorate([
        Input(),
        __metadata("design:type", Number)
    ], PaymentSectionComponent.prototype, "completePrice", void 0);
    PaymentSectionComponent = __decorate([
        Component({
            selector: 'app-payment-section',
            templateUrl: './payment-section.component.html',
            styleUrls: ['./payment-section.component.scss']
        }),
        __metadata("design:paramtypes", [])
    ], PaymentSectionComponent);
    return PaymentSectionComponent;
}());
export { PaymentSectionComponent };
//# sourceMappingURL=payment-section.component.js.map