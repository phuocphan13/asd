var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { NgModule } from '@angular/core';
import { DropDownComponent } from './drop-down/drop-down.component';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ItemShowingComponent } from './item-showing/item-showing.component';
import { PipeModule } from '../pipes/pipe.module';
import { InputComponent } from './input/input.component';
var CommonComponentModule = /** @class */ (function () {
    function CommonComponentModule() {
    }
    CommonComponentModule = __decorate([
        NgModule({
            declarations: [
                DropDownComponent,
                ItemShowingComponent,
                InputComponent
            ],
            imports: [
                CommonModule,
                FormsModule,
                PipeModule
            ],
            exports: [
                DropDownComponent,
                InputComponent,
                ItemShowingComponent
            ]
        })
    ], CommonComponentModule);
    return CommonComponentModule;
}());
export { CommonComponentModule };
//# sourceMappingURL=common-component.module.js.map