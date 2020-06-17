import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  {path: 'auth', loadChildren: './modules/auth/auth.module#AuthModule'},
  {path: 'home', loadChildren: './modules/auth/home.module#HomeModule'},
  {path: '**', redirectTo: 'auth', pathMatch: 'full'},
  {path: '', loadChildren: 'auth', pathMatch: 'full'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
