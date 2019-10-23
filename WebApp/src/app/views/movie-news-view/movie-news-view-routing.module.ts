import { Routes, RouterModule } from "@angular/router";
import { NgModule } from "@angular/core";
import { MovieNewsViewComponent } from "./movie-news-view.component";
import { MainNewsComponent } from "./news-content/main-news/main-news.component";
import { NewsHomePageComponent } from "./news-home-page/news-home-page.component";

const routes: Routes = [
    {
        path: '',
        component: MovieNewsViewComponent,
        children: [
            {
                path: '',
                component: NewsHomePageComponent
            },
            { 
                path: 'news-detail', 
                component: MainNewsComponent 
            }
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

export class MovieNewsViewRoutingModule { }