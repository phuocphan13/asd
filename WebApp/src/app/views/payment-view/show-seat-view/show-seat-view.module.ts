import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgSelectModule } from '@ng-select/ng-select';
import { BsDatepickerModule } from 'ngx-bootstrap';
import { ShowSeatViewComponent } from './show-seat-view.component';

@NgModule({
  declarations: [
      
  ],
  imports: [
    NgSelectModule,
    BsDatepickerModule.forRoot(),
    CommonModule
  ],
  exports: [
    
  ]
})
export class ShowSeatViewModule { }
