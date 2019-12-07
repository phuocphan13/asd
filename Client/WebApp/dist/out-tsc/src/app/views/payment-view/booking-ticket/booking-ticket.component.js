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
var BookingTicketComponent = /** @class */ (function () {
    function BookingTicketComponent() {
        this.itemsValue = new EventEmitter();
        this.totalTicketPrice = 0;
        this.totalComboPrice = 0;
        this.totalPrice = 0;
        this.listCombo = [
            {
                id: 0,
                imgUrl: "https://media.ifind.vn/data/images/media/3d4-1535013677796.jpg",
                comboname: "Bắp Nước",
                price: 40000,
                value: 0
            },
            {
                id: 1,
                imgUrl: "https://media.ifind.vn/data/images/media/3d4-1535013677796.jpg",
                comboname: "Bắp Nước Vừa",
                price: 50000,
                value: 0
            },
            {
                id: 2,
                imgUrl: "https://media.ifind.vn/data/images/media/3d4-1535013677796.jpg",
                comboname: "Bắp Nước To",
                price: 60000,
                value: 0
            },
            {
                id: 3,
                imgUrl: "https://media.ifind.vn/data/images/media/3d4-1535013677796.jpg",
                comboname: "Bắp Nước KHỔNG LỒ",
                price: 100000,
                value: 0
            },
            {
                id: 4,
                imgUrl: "https://media.ifind.vn/data/images/media/3d4-1535013677796.jpg",
                comboname: "Bắp Bò",
                price: 75000,
                value: 0
            },
            {
                id: 5,
                imgUrl: "https://media.ifind.vn/data/images/media/3d4-1535013677796.jpg",
                comboname: "Bắp Chuối",
                price: 65000,
                value: 0
            },
        ];
        this.listTicket = [
            {
                id: 0,
                tickettype: "Vé 2D",
                price: 80000,
                value: 0
            },
            {
                id: 1,
                tickettype: "Vé 3D",
                price: 100000,
                value: 0
            },
            {
                id: 2,
                tickettype: "Vé IMAX",
                price: 180000,
                value: 0
            },
            {
                id: 3,
                tickettype: "Vé IMAX2",
                price: 185000,
                value: 0
            },
            {
                id: 4,
                tickettype: "Vé VERY IMAX",
                price: 190000,
                value: 0
            },
            {
                id: 5,
                tickettype: "Vé EVEN-BETTER IMAX",
                price: 280000,
                value: 0
            },
            {
                id: 6,
                tickettype: "Vé I'M-MAX",
                price: 380000,
                value: 0
            },
        ];
    }
    BookingTicketComponent.prototype.ngOnInit = function () {
    };
    BookingTicketComponent.prototype.ticketValueOutPut = function (item) {
        var _this = this;
        if (item.value == null) {
            item.value = 0;
        }
        else if (item.value > 10) {
            item.value = 10;
        }
        this.listTicket.forEach(function (element) {
            _this.totalTicketPrice = _this.totalTicketPrice + ((element.value) * (element.price));
        });
        this.listCombo.forEach(function (element) {
            _this.totalComboPrice = _this.totalComboPrice + ((element.value) * (element.price));
        });
        this.totalPrice = this.totalComboPrice + this.totalTicketPrice;
        this.itemsValue.emit(this.totalPrice);
        this.totalTicketPrice = 0;
        this.totalComboPrice = 0;
    };
    __decorate([
        Output(),
        __metadata("design:type", Object)
    ], BookingTicketComponent.prototype, "itemsValue", void 0);
    BookingTicketComponent = __decorate([
        Component({
            selector: 'app-booking-ticket',
            templateUrl: './booking-ticket.component.html',
            styleUrls: ['./booking-ticket.component.scss']
        }),
        __metadata("design:paramtypes", [])
    ], BookingTicketComponent);
    return BookingTicketComponent;
}());
export { BookingTicketComponent };
//# sourceMappingURL=booking-ticket.component.js.map