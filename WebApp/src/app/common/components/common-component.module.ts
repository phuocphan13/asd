import { NgModule } from '@angular/core';
import { DropDownComponent } from './drop-down/drop-down.component';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@NgModule({
    declarations: [
        DropDownComponent
    ],
    imports: [
        CommonModule,
        FormsModule
    ],
    exports: [
        DropDownComponent
    ]
})
export class CommonComponentModule { }
