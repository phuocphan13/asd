import { NgModule } from '@angular/core';
import { DropDownComponent } from './drop-down/drop-down.component';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ItemShowingComponent } from './item-showing/item-showing.component';

@NgModule({
    declarations: [
        DropDownComponent,
        ItemShowingComponent
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
