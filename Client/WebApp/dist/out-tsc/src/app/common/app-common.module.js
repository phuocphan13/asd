var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { NgModule } from '@angular/core';
import { PipeModule } from './pipes/pipe.module';
import { DirectiveModule } from './directives/directive.module';
import { CommonComponentModule } from './components/common-component.module';
var AppCommonModule = /** @class */ (function () {
    function AppCommonModule() {
    }
    AppCommonModule = __decorate([
        NgModule({
            declarations: [],
            providers: [
                CommonComponentModule,
                PipeModule,
                DirectiveModule
            ],
            exports: [
                PipeModule,
                DirectiveModule,
                CommonComponentModule
            ]
        })
    ], AppCommonModule);
    return AppCommonModule;
}());
export { AppCommonModule };
//# sourceMappingURL=app-common.module.js.map