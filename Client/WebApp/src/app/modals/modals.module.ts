import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { InputComponent } from '../common/components/input/input.component';
import { CommonComponentModule } from '../common/components/common-component.module';
import { AppCommonModule } from '../common/app-common.module';
import { LoginModalComponent } from './login/login.modal.component';
import { ForgottenModalComponent } from './forgotten/forgotten.modal.component';

@NgModule({
    declarations: [
        LoginModalComponent,
        ForgottenModalComponent
    ],
    imports: [
        FormsModule,
        CommonModule,
        AppCommonModule
    ],
    providers: [
    ],
    entryComponents: [
        LoginModalComponent,
        ForgottenModalComponent
    ],
    exports: [
        LoginModalComponent,
        ForgottenModalComponent
    ]
})
export class ModalsModule { }
