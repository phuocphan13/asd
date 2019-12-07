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
import { MenuService } from 'src/app/core/services/menu.service';
import { BsModalService } from 'ngx-bootstrap';
import { LoginModalComponent } from 'src/app/modals/login/login.modal.component';
import { ForgottenModalComponent } from 'src/app/modals/forgotten/forgotten.modal.component';
var HeaderComponent = /** @class */ (function () {
    function HeaderComponent(menuService, modalService) {
        this.menuService = menuService;
        this.modalService = modalService;
    }
    HeaderComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.menuService.GetAll().subscribe(function (result) {
            _this.listMenus = result;
        });
    };
    HeaderComponent.prototype.onSearch = function () {
    };
    HeaderComponent.prototype.onClickLogin = function () {
        var _this = this;
        this.modalRef = this.modalService.show(LoginModalComponent, {
            ignoreBackdropClick: true
        });
        this.modalRef.content.username = this.username;
        this.modalRef.content.password = this.password;
        this.modalRef.content.event.subscribe(function (result) {
            if (result === 1) {
                _this.modalRef = _this.modalService.show(ForgottenModalComponent, {
                    ignoreBackdropClick: true
                });
            }
        });
    };
    HeaderComponent = __decorate([
        Component({
            selector: 'app-header',
            templateUrl: './header.component.html',
            styleUrls: ['./header.component.scss']
        }),
        __metadata("design:paramtypes", [MenuService,
            BsModalService])
    ], HeaderComponent);
    return HeaderComponent;
}());
export { HeaderComponent };
//# sourceMappingURL=header.component.js.map