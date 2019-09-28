import { NgModule } from '@angular/core';
import { TruncatePipe } from './truncate.pipe';

@NgModule({
    declarations: [
        TruncatePipe
    ],
    providers: [
    ],
    exports: [
        TruncatePipe,
    ]
})
export class PipeModule { }
