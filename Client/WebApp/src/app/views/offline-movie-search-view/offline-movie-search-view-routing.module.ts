import { Routes, RouterModule } from "@angular/router";
import { NgModule } from "@angular/core";
import { OfflineMovieSearchViewComponent } from "./offline-movie-search-view.component";
import { TimeMovieCinemaComponent } from "./time-movie-cinema/time-movie-cinema.component";
import { OnlineMoviesCenterViewComponent } from "./online-movies-center-view/online-movies-center-view.component";


const routes: Routes = [
    {
        path: '',
        component: OfflineMovieSearchViewComponent,
        children: [
            {
                path: '',
                component: TimeMovieCinemaComponent,
                // children:[{
                //     path: 'online',
                //     component: OnlineMoviesCenterViewComponent,
                // }]
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

export class OfflineMovieSearchViewRoutingModule { }