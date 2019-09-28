import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HttpClientModule } from '@angular/common/http';
import { NgSelectModule } from '@ng-select/ng-select';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { AppRouting } from './app.router';
import { CommonModule } from '@angular/common';
import { SidebarModule } from 'ng-sidebar';

import { PerfectScrollbarModule } from 'ngx-perfect-scrollbar';
import { PERFECT_SCROLLBAR_CONFIG } from 'ngx-perfect-scrollbar';
import { PerfectScrollbarConfigInterface } from 'ngx-perfect-scrollbar';
import { ModalModule } from 'ngx-bootstrap';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BsDropdownModule } from 'ngx-bootstrap';
import { AlertModule } from 'ngx-alerts';
import { MainViewComponent } from './views/main-view/main-view.component';
import { ArticleComponent } from './article/article.component';
import { NewsSectionComponent } from './controls/main-news/main-news.component';
import { SidenewsHalfsizeComponent } from './controls/side-news-half-size/side-news-half-size.component';
import { SharedModule } from './shared/shared.module';
import { ViewModule } from './views/view.module';
import { ControlModule } from './controls/control.module';
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';
import { ServiceModule } from './core/services/service.module';
import { AppCommonModule } from './common/app-common.module';
import { ServiceModule } from './core/services/service.module';

const appRoutes: Routes = [
  {
    path: '**',
    redirectTo: ''
  }
];

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
    MainViewComponent,
    NewsSectionComponent,
    SidenewsHalfsizeComponent,
    ArticleComponent,
  ],
  imports: [
    AppCommonModule,
    ServiceModule,
    ControlModule,
    ViewModule,
    SharedModule,
    CommonModule,
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgSelectModule,
    FormsModule,
    ModalModule.forRoot(),
    NgbModule.forRoot(),
    SidebarModule.forRoot(),
    BsDropdownModule.forRoot(),
    AppRouting,
    AppRoutingModule,
    PerfectScrollbarModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(appRoutes, {
      enableTracing: environment.production === false,
      useHash: true
    }),
    AlertModule.forRoot({maxMessages: 5, timeout: 5000, position: 'right'}),
    BsDatepickerModule.forRoot()
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
