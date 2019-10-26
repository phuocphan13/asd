import { Routes, RouterModule } from "@angular/router";
import { NgModule } from "@angular/core";
import { FilmOnlineViewComponent } from "./film-online-view.component";

const routes: Routes = [
    {
        path: '',
        component: FilmOnlineViewComponent,
        children: [
            
        ]
    }
];

@NgModule({
    imports: [
        RouterModule.forChild(routes)
    ],
    exports: [
        RouterModule
    ],
    providers: [
    ]
})

export class FilmOnlineViewRoutingModule { }