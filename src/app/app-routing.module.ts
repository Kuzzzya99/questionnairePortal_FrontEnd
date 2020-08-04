import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';


const routes: Routes = [
  {path: 'auth', loadChildren: () => import('src/app/modules/auth/auth.module').then(m => m.AuthModule)},
  {path: 'home', loadChildren: () => import('src/app/modules/home/home.module').then(m => m.HomeModule)},
  {path: '**', redirectTo: 'auth', pathMatch: 'full'},
  {path: '', loadChildren: 'auth', pathMatch: 'full'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
