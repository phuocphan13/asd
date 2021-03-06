import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { FormsModule } from '@angular/forms';
import { CommonComponentModule } from '../common/components/common-component.module';
import { ModalModule } from 'ngx-bootstrap';
import { AppCommonModule } from '../common/app-common.module';

@NgModule({
  declarations: [
    FooterComponent,
    HeaderComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ModalModule,
    AppCommonModule
  ],
  providers: [
  ],
  exports: [
    HeaderComponent,
    FooterComponent
  ],
})
export class SharedModule { }
