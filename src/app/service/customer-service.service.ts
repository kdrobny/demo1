import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Customer } from '../model/Customer';
import { Observable } from 'rxjs';

@Injectable()
export class CustomerService {

  private customersUrl: string;
  public authenticated: boolean = false;

  constructor(private http: HttpClient) {
    this.customersUrl = 'http://localhost:8080/api/customers';
  }

  authenticate(credentials, callback) {

    const headers = new HttpHeaders(credentials ? {
      authorization : 'Basic ' + btoa(credentials.username + ':' + credentials.password)
    } : {});

    this.http.get('http://localhost:8080/user', {headers: headers, withCredentials: true}).subscribe(response => {
      if (response['name']) {
        this.authenticated = true;
      } else {
        this.authenticated = false;
      }
      return callback && callback();
    });

  }

  public findAll(): Observable<Customer[]> {
    //const headers  = new HttpHeaders({ Authorization: 'Basic ' + btoa('user:pwd') });
    return this.http.get<Customer[]>(this.customersUrl, { withCredentials: true});
  }

  public save(customer: Customer) {
    return this.http.post<Customer>(this.customersUrl, customer, { withCredentials: true});
  }
}
