import { Routes, RouterModule } from "@angular/router";
import { NgModule } from "@angular/core";
import { MovieNewsViewComponent } from "./movie-news-view.component";
import { MainNewsComponent } from "./main-news/main-news.component";
import { NewsHomePageComponent } from "./news-home-page/news-home-page.component";
import { Shell } from "src/app/core/shell/shell.service";

const routes: Routes = [
    Shell.childRoutes([{
        path: 'news',
        component: MovieNewsViewComponent,
        children: [
            {
                path: '',
                component: NewsHomePageComponent
            },
            {
                path: 'news-detail/:id',
                component: MainNewsComponent,
            }
        ]
    }])
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

export class MovieNewsViewRoutingModule { }