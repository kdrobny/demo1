import { Component } from '@angular/core';
import {Router} from "@angular/router";
import {HttpClient} from "@angular/common/http";
import {CustomerService} from "./service/customer-service.service";
import {finalize} from "rxjs/operators";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  title: string;

  constructor(private app: CustomerService, private http: HttpClient, private router: Router) {
    this.title = 'Spring Boot - Angular Application';
    this.app.authenticate(undefined, undefined);
  }

  logout() {
    this.http.post('http://localhost:8080/logout', {},{ withCredentials: true}).pipe(finalize (() => {
      this.app.authenticated = false;
      this.router.navigateByUrl('/login');
    })).subscribe();
  }

  authenticated() { return this.app.authenticated; }

}
