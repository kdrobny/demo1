import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {CustomerListComponent} from "./customer-list/customer-list.component";
import {CustomerFormComponent} from "./customer-form/customer-form.component";
import {LoginComponent} from "./login/login.component";

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'CustomerListComponent'},
  { path: 'home', component: CustomerListComponent },
  { path: 'customers', component: CustomerListComponent },
  { path: 'addcustomer', component: CustomerFormComponent },
  { path: 'login', component: LoginComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
