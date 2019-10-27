import { Routes, RouterModule } from "@angular/router";
import { NgModule } from "@angular/core";
import { FilmOnlineViewComponent } from "./film-online-view.component";
import { FilmOnlineHomeViewComponent } from "./film-online-home-view/film-online-home-view.component";
import { FilmOnlineDetailViewComponent } from "./film-online-detail-view/film-online-detail-view.component";

const routes: Routes = [
    {
        path: '',
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