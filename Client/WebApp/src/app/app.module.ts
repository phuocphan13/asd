import { NgModule, forwardRef } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HttpClientModule } from '@angular/common/http';
import { NgSelectModule } from '@ng-select/ng-select';
import { FormsModule, ReactiveFormsModule, NG_VALUE_ACCESSOR } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { SidebarModule } from 'ng-sidebar';

import { PerfectScrollbarModule } from 'ngx-perfect-scrollbar';
import { PERFECT_SCROLLBAR_CONFIG } from 'ngx-perfect-scrollbar';
import { PerfectScrollbarConfigInterface } from 'ngx-perfect-scrollbar';
import { ProgressbarModule } from 'ngx-bootstrap';

import { ModalsModule } from './modals/modals.module';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BsDropdownModule, ModalModule, CarouselModule } from 'ngx-bootstrap';
import { AlertModule } from 'ngx-alerts';
import { SharedModule } from './shared/shared.module';

import { ControlModule } from './controls/control.module';
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';
import { ServiceModule } from './core/services/service.module';
import { AppCommonModule } from './common/app-common.module';
import { AuthCallbackComponent } from './core/auth-callback/auth-callback.component';
import { ShellModule } from './core/shell/shell.module';
import { FilmOnlineViewModule } from './views/film-online-view/film-online-view.module';
import { BrowserModule } from '@angular/platform-browser';
import { MovieNewsViewModule } from './views/movie-news-view/movie-news-view.module';
import { OfflineMovieSearchViewModule } from './views/offline-movie-search-view/offline-movie-search-view.module';
import { PaymentViewModule } from './views/payment-view/payment-view.module';

const DEFAULT_PERFECT_SCROLLBAR_CONFIG: PerfectScrollbarConfigInterface = {
  suppressScrollX: true
};

export const environment = {
  production: false,
  appName: 'Lucifer'
};

@NgModule({
  declarations: [
    AppComponent,
    AuthCallbackComponent
  ],
  imports: [
    ModalsModule,
    AppCommonModule,

    FilmOnlineViewModule,
    MovieNewsViewModule,
    OfflineMovieSearchViewModule,
    PaymentViewModule,
    
    ServiceModule,
    ControlModule,
    SharedModule,
    CommonModule,
    HttpClientModule,
    NgSelectModule,
    FormsModule,
    ShellModule,
    ModalModule.forRoot(),
    NgbModule.forRoot(),
    SidebarModule.forRoot(),
    BsDropdownModule.forRoot(),
    ProgressbarModule.forRoot(),
    AppRoutingModule,
    PerfectScrollbarModule,
    BrowserModule,
    // BrowserAnimationsModule,
    ReactiveFormsModule,
    AlertModule.forRoot({ maxMessages: 5, timeout: 5000, position: 'right' }),
    BsDatepickerModule.forRoot(),
    ProgressbarModule.forRoot()
  ],
  entryComponents: [
  ],
  providers: [
    {
      provide: PERFECT_SCROLLBAR_CONFIG,
      useValue: DEFAULT_PERFECT_SCROLLBAR_CONFIG
    },
  ],

  bootstrap: [AppComponent]
})
export class AppModule { }
