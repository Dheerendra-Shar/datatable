import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SigninComponent } from './signin/signin.component';
import { ViewsignComponent } from './viewsign/viewsign.component';

const routes: Routes = [

  {
    path: 'login',
    loadChildren: () =>
      import('./user/user-routing.module').then(
        (m) => m.UserRoutingModule
      ),
  },
  {
    path: 'view',
    component:  ViewsignComponent,
    
  },
  {
    path: 'sigin',
    component:  SigninComponent  
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
