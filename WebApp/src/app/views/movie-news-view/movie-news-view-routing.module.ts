import { Routes, RouterModule } from "@angular/router";
import { NgModule } from "@angular/core";

const routes: Routes = [
    {
        path: '', component: SpendingAccountApp, resolve: [SpendingAccountPreloadService], children: [
            { path: '', component: AccountComponent },
            { path: 'ClaimLimit', component: ClaimLimitComponent },
            { path: 'ClaimHistory', component: ClaimHistoryComponent },
            { path: 'DependantsConfirmation', component: DependantsConfirmationComponent },
            { path: 'PersonalDetailsConfirmation', component: PersonalDetailsConfirmationComponent }
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

export class MovieNewsViewRoutingModule {}