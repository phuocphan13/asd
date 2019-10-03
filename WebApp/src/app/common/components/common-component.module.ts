import { NgModule } from '@angular/core';
import { DropDownComponent } from './drop-down/drop-down.component';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ItemShowingComponent } from './item-showing/item-showing.component';
import { PipeModule } from '../pipes/pipe.module';
import { InputComponent } from './input/input.component';

@NgModule({
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
export class CommonComponentModule { }
