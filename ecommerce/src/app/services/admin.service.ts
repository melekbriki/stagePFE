import { HttpClient, HttpErrorResponse, HttpHeaders } from "@angular/common/http";
import { EMPTY, Observable, catchError, throwError } from "rxjs";
import { Injectable } from "@angular/core";
import { AuthenticationService } from "./authentification.service";

@Injectable({
  providedIn: 'root'
})
export class AdminService {

  private baseUrl = 'http://localhost:8080/api/v1/auth';
  
  constructor(private http: HttpClient,
    private authService: AuthenticationService,

  ) {}

  addCategory(categoryDto: any, userId: string): Observable<any> {
    return this.http.post(`${this.baseUrl}/category?userId=${userId}`, categoryDto);
  }

 
  



 


  deletProduct(productID: any): Observable<any> {
    return this.http.delete(`${this.baseUrl}/product/${productID}`);
  }

  checkCategoryValidation(categoryDto: any): Observable<any> {
    // Assuming createCategory endpoint handles validation
    return this.http.post(`${this.baseUrl}/category`, categoryDto);
  }

  getAllCategories(): Observable<any> {
    return this.http.get(`${this.baseUrl}/categories`);
  }
  
  getAllProducts(): Observable<any> {
    return this.http.get(`${this.baseUrl}/products`);
  }

  getAllProductsByName(name:any): Observable<any> {
    return this.http.get(`${this.baseUrl}/search/${name}`);
  }
  

  addProduct(productDto: any, userId: string): Observable<any> {
    return this.http.post(`${this.baseUrl}/product?userId=${userId}`, productDto);
  }

  // admin.service.ts
  private createAuthorizationHeader(): HttpHeaders {
return new HttpHeaders().set(
  'Authorization','Bearer '+ this.authService.getJwtToken()
)
  }
  

  addToCart(productId: any): Observable<any> {
   
    const userId=this.authService.getUserId();
    return this.http.post(`${this.baseUrl}/cartItem/${userId}`, productId);
  }
  
  getCartByUserId(): Observable<any> {
    
    const userId=this.authService.getUserId();
    return this.http.get(`${this.baseUrl}/cartItem/${userId}`);
  }
 //// addToCart(): Observable<any> {
  //  return this.http.post<any>(${this.baseUrl}/cartItem, body);
//}


  private handleError(error: HttpErrorResponse) {
    let errorMessage = 'An error occurred';
    if (error.error instanceof ErrorEvent) {
      // Client-side error
      errorMessage = `Error: ${error.error.message}`;
    } else {
      // Server-side error
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    console.error(errorMessage);
    return throwError(errorMessage);
  }
  
  
  
  
  
  makeRequest(userId: number, otherData: any): Observable<any> {
    if (userId) {
      // ID is not null or undefined, proceed with the HTTP request
      return this.http.post(`${this.baseUrl}/user`, { userId, otherData });
    } else {
      console.error('User ID is null or undefined');
      // Return an observable with an error message or handle the case accordingly
      return new Observable<any>(observer => {
        observer.error('User ID is null or undefined');
      });
    }
  }
  



}
  

  




  
  

