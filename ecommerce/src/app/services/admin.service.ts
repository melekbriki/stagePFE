import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable } from "rxjs";
import { Injectable } from "@angular/core";

@Injectable({
  providedIn: 'root'
})
export class AdminService {

  private baseUrl = 'http://localhost:8080/api/v1/auth';
  
  constructor(private http: HttpClient) {}

  addCategory(categoryDto: any, userId: string): Observable<any> {
    return this.http.post(`${this.baseUrl}/category?userId=${userId}`, categoryDto);
  }

 
  private createAuthorizationHeader(userId: string): HttpHeaders {
    return new HttpHeaders().set(
      'Authorization', 'Bearer ' + userId
    );
  }




  addProduct(productDto: any, userId: string): Observable<any> {
    return this.http.post(`${this.baseUrl}/product?userId=${userId}`, productDto);
  }

  checkCategoryValidation(categoryDto: any): Observable<any> {
    // Assuming createCategory endpoint handles validation
    return this.http.post(`${this.baseUrl}/category`, categoryDto);
  }

  getAllCategories(): Observable<any> {
    return this.http.get(`${this.baseUrl}/categories`);
  }
  
}
