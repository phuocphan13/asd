import { Routes, RouterModule } from "@angular/router";
import { NgModule } from "@angular/core";
import { FilmOnlineViewComponent } from "./film-online-view.component";
import { FilmOnlineHomeViewComponent } from "./film-online-home-view/film-online-home-view.component";
import { FilmOnlineDetailViewComponent } from "./film-online-detail-view/film-online-detail-view.component";
import { Shell } from "src/app/core/shell/shell.service";

const routes: Routes = [
    Shell.childRoutes([
        {
            path: 'film-online',
            component: FilmOnlineViewComponent,
            children: [
                {
                    path: '',
                    component: FilmOnlineHomeViewComponent
                },
                {
                    path: 'film-detail/:id',
                    component: FilmOnlineDetailViewComponent,
                },
            ]
        }
    ])
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