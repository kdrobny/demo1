import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {CustomerListComponent} from "./customer-list/customer-list.component";
import {CustomerFormComponent} from "./customer-form/customer-form.component";

const routes: Routes = [
  { path: 'customers', component: CustomerListComponent },
  { path: 'addcustomer', component: CustomerFormComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
