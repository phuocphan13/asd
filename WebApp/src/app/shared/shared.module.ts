import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { FormsModule } from '@angular/forms';
import { CommonComponentModule } from '../common/components/common-component.module';

@NgModule({
  declarations: [
    FooterComponent,
    HeaderComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    CommonComponentModule
  ],
  exports: [
    HeaderComponent,
    FooterComponent
  ],
})
export class SharedModule { }
