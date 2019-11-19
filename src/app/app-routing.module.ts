import { NgModule } from '@angular/core';
import { Routes, RouterModule, ExtraOptions } from '@angular/router';
import { ListComponent } from './pages/list/list.component';
import { LoginComponent } from './pages/login/login.component';
import { RegisterComponent } from './pages/register/register.component';
import { ResetComponent } from './pages/reset/reset.component';

const routes: Routes = [
<<<<<<< HEAD
{
  path: 'list',
  component: ListComponent
},
{
  path: 'login',
  component: LoginComponent
 },
 {
  path: 'register',
  component: RegisterComponent
=======
  {
    path: 'list',
    component: ListComponent
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'register',
    component: RegisterComponent
>>>>>>> 6962227a6b8c597741305f0f0816b5d97d3a6b01
  },
  {
    path: 'reset',
    component: ResetComponent
  },
<<<<<<< HEAD
 { path: '', redirectTo: '/login', pathMatch: 'full' },
 { path: '**', redirectTo: '/login', },
=======
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: '**', redirectTo: '/login' },
>>>>>>> 6962227a6b8c597741305f0f0816b5d97d3a6b01
];

const options: ExtraOptions = {
  useHash: false
};

@NgModule({
  imports: [RouterModule.forRoot(routes, options)],
  exports: [RouterModule]
})

<<<<<<< HEAD

=======
>>>>>>> 6962227a6b8c597741305f0f0816b5d97d3a6b01
export class AppRoutingModule { }
