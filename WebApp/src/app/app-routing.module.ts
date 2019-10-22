import { Routes, RouterModule } from "@angular/router";
import { MainViewComponent } from "./views/main-view/main-view.component";
import { NgModule } from "@angular/core";

const appRoutes: Routes = [
    {
        path: '',
        component: MainViewComponent,
        children: [
            {
                path: '',
                loadChildren: './views/view.module#ViewModule',
            }
        ]
    },
    // {
    //     path: 'home/:brandId',
    //     component: HomeComponent
    // },
    // {
    //     path: 'temp-of-use',
    //     component: TempOfUseComponent,
    // },
    // {
    //     path: "accept-push-message",
    //     component: AcceptPushMessageComponent,
    // }
];

@NgModule({
    imports: [
        RouterModule.forRoot(appRoutes, { useHash: true })
    ],
    providers: [
    ],
    exports: [
        RouterModule
    ]
})

export class AppRoutingModule { }