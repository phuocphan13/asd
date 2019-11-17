var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { AppCommonModule } from '../common/app-common.module';
import { LoginModalComponent } from './login/login.modal.component';
import { ForgottenModalComponent } from './forgotten/forgotten.modal.component';
var ModalsModule = /** @class */ (function () {
    function ModalsModule() {
    }
    ModalsModule = __decorate([
        NgModule({
            declarations: [
                LoginModalComponent,
                ForgottenModalComponent
            ],
            imports: [
                FormsModule,
                CommonModule,
                AppCommonModule
            ],
            providers: [],
            entryComponents: [
                LoginModalComponent,
                ForgottenModalComponent
            ],
            exports: [
                LoginModalComponent,
                ForgottenModalComponent
            ]
        })
    ], ModalsModule);
    return ModalsModule;
}());
export { ModalsModule };
//# sourceMappingURL=modals.module.js.map