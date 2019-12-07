import { NgModule } from '@angular/core';
import { PipeModule } from './pipes/pipe.module';
import { DirectiveModule } from './directives/directive.module';
import { CommonComponentModule } from './components/common-component.module';

@NgModule({
  declarations: [
  ],
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
export class AppCommonModule { }
