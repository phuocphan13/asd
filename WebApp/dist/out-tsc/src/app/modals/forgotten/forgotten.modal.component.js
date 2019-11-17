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
var ForgottenModalComponent = /** @class */ (function () {
    function ForgottenModalComponent(bsModalRef) {
        this.bsModalRef = bsModalRef;
        this.event = new EventEmitter();
    }
    ForgottenModalComponent.prototype.ngOnInit = function () {
    };
    ForgottenModalComponent.prototype.onClickForgotten = function () {
    };
    ForgottenModalComponent.prototype.onClickSubmit = function () {
        //API Submit
    };
    ForgottenModalComponent.prototype.onClickCancel = function () {
        this.closeModal();
    };
    ForgottenModalComponent.prototype.closeModal = function () {
        this.bsModalRef.hide();
    };
    ForgottenModalComponent = __decorate([
        Component({
            selector: 'app-forgotten-modal',
            templateUrl: './forgotten.modal.component.html',
            styleUrls: ['./forgotten.modal.component.scss']
        }),
        __metadata("design:paramtypes", [BsModalRef])
    ], ForgottenModalComponent);
    return ForgottenModalComponent;
}());
export { ForgottenModalComponent };
//# sourceMappingURL=forgotten.modal.component.js.map