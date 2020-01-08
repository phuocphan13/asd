var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HttpClientModule } from '@angular/common/http';
import { NgSelectModule } from '@ng-select/ng-select';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { AppRouting } from './app.router';
import { CommonModule } from '@angular/common';
import { SidebarModule } from 'ng-sidebar';
import { PerfectScrollbarModule } from 'ngx-perfect-scrollbar';
import { PERFECT_SCROLLBAR_CONFIG } from 'ngx-perfect-scrollbar';
import { ModalsModule } from './modals/modals.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BsDropdownModule, ModalModule } from 'ngx-bootstrap';
import { AlertModule } from 'ngx-alerts';
import { MainViewComponent } from './views/main-view/main-view.component';
import { ArticleComponent } from './article/article.component';
import { SharedModule } from './shared/shared.module';
import { ViewModule } from './views/view.module';
import { ControlModule } from './controls/control.module';
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';
import { ServiceModule } from './core/services/service.module';
import { AppCommonModule } from './common/app-common.module';
var appRoutes = [
    {
        path: '**',
        redirectTo: ''
    }
];
var DEFAULT_PERFECT_SCROLLBAR_CONFIG = {
    suppressScrollX: true
};
export var environment = {
    production: false,
    appName: 'Lucifer'
};
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        NgModule({
            declarations: [
                AppComponent,
                MainViewComponent,
                ArticleComponent,
            ],
            imports: [
                ModalsModule,
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
                AlertModule.forRoot({ maxMessages: 5, timeout: 5000, position: 'right' }),
                BsDatepickerModule.forRoot()
            ],
            entryComponents: [],
            providers: [
                {
                    provide: PERFECT_SCROLLBAR_CONFIG,
                    useValue: DEFAULT_PERFECT_SCROLLBAR_CONFIG
                },
            ],
            bootstrap: [AppComponent]
        })
    ], AppModule);
    return AppModule;
}());
export { AppModule };
//# sourceMappingURL=app.module.js.map