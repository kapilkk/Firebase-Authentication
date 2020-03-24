import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BaseComponent } from './_views/layouts/base/base.component';
import { AngularFireAuthGuard } from '@angular/fire/auth-guard';


const routes: Routes = [
  {
    path: 'auth',
    loadChildren: () => import('./_views/pages/auth/auth.module').then(m => m.AuthModule)
  },
  {
    path: "",
    component: BaseComponent,
    canActivate: [AngularFireAuthGuard],
    children: [
      {
        path: 'home',
        loadChildren: () => import('./_views/pages/home/home.module').then(m => m.HomeModule)
      }
    ]
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: '**',
    redirectTo: 'home',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
