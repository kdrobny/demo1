import { Component } from '@angular/core';
import {Customer} from "../model/Customer";
import {CustomerService} from "../service/customer-service.service";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-customer-form',
  templateUrl: './customer-form.component.html',
  styleUrls: ['./customer-form.component.css']
})
export class CustomerFormComponent {

  customer: Customer;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private userService: CustomerService) {
    this.customer = new Customer();
  }

  onSubmit() {
    this.userService.save(this.customer).subscribe(result => this.gotoUserList());
  }

  gotoUserList() {
    this.router.navigate(['/customers']);
  }

}
