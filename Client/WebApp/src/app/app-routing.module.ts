import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthCallbackComponent } from './core/auth-callback/auth-callback.component';

const routes: Routes = [
  {
    path: 'auth-callback',
    component: AuthCallbackComponent
  },
  { 
    path: '**', 
    redirectTo: '', 
    pathMatch: 'full' 
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { useHash: true })
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
