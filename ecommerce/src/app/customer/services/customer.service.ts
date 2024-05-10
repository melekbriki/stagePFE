import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {
  private baseUrl = 'http://localhost:8080/';

  constructor(private http: HttpClient) { }


  getAllProducts(): Observable<any> {
    return this.http.get(`${this.baseUrl}/api/customer/products`);
  }

  getAllProductsByName(name:any): Observable<any> {
    return this.http.get(`${this.baseUrl}/api/customer//search/${name}`);
  }

  private createAuthorizationHeader(userId: string): HttpHeaders {
    return new HttpHeaders().set(
      'Authorization', 'Bearer ' + userId
    );
  }

}
