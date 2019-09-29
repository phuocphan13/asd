import { NgModule } from '@angular/core';
import { DropDownComponent } from './drop-down/drop-down.component';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ItemShowingComponent } from './item-showing/item-showing.component';
import { PipeModule } from '../pipes/pipe.module';

@NgModule({
    declarations: [
        DropDownComponent,
        ItemShowingComponent
    ],
    imports: [
        CommonModule,
        FormsModule,
        PipeModule
    ],
    exports: [
        DropDownComponent,
        ItemShowingComponent
    ]
})
export class CommonComponentModule { }
