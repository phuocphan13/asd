var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component, EventEmitter } from '@angular/core';
import { BsModalRef } from 'ngx-bootstrap';
var LoginModalComponent = /** @class */ (function () {
    function LoginModalComponent(bsModalRef) {
        this.bsModalRef = bsModalRef;
        this.event = new EventEmitter();
        this.user = { username: "", password: "" };
    }
    LoginModalComponent.prototype.ngOnInit = function () {
    };
    LoginModalComponent.prototype.onClickForgotten = function () {
        this.event.emit(1);
        this.bsModalRef.hide();
    };
    LoginModalComponent.prototype.onClickLogIn = function () {
        //API Login
        console.log(this.password);
    };
    LoginModalComponent.prototype.onClickCancel = function () {
        this.closeModal();
    };
    LoginModalComponent.prototype.closeModal = function () {
        this.bsModalRef.hide();
    };
    LoginModalComponent = __decorate([
        Component({
            selector: 'app-login-modal',
            templateUrl: './login.modal.component.html',
            styleUrls: ['./login.modal.component.scss']
        }),
        __metadata("design:paramtypes", [BsModalRef])
    ], LoginModalComponent);
    return LoginModalComponent;
}());
export { LoginModalComponent };
//# sourceMappingURL=login.modal.component.js.map