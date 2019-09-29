import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuService } from './menu.service';
import { SharedService } from './shared.service';
import { MovieService } from './movie.service';

@NgModule({
  declarations: [
  ],
  providers: [
      MenuService,
      SharedService,
      MovieService
  ]
})
export class ServiceModule { }
