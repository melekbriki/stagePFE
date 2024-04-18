
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { RegisterRequest } from '../models/register-request';
import { VerificationRequest } from '../models/verification-request';
import { Router } from '@angular/router';
import { AuthenticationResponse } from '../models/authentification-response';
import { AuthenticationRequest } from '../models/authentification-request';
import { Observable, catchError, map, tap } from 'rxjs';
import { Token } from '@angular/compiler';



@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  private baseUrl = 'http://localhost:8080/api/v1/auth';

  constructor(
    private http: HttpClient,
    private router: Router
  ) { }

  register(registerRequest: RegisterRequest) {
    return this.http.post<AuthenticationResponse>(`${this.baseUrl}/register`, registerRequest);
  }

  registerUser(registerRequest: RegisterRequest) {
    return this.http.post<AuthenticationResponse>(`${this.baseUrl}/register`, registerRequest )
      .pipe(
        catchError(error => {
          console.error('Registration failed:', error);
          throw error; // Rethrow the error to propagate it to the caller
        })
      );
  }
 
  getUserId(): string {
    // Example implementation, replace with your actual logic to retrieve the user ID
    const user = localStorage.getItem('user');
    return user ? JSON.parse(user).id : null;
  }

  
  getUsers() {
    return this.http.get(`${this.baseUrl}/getUser`)
      .pipe(
        catchError(error => {
          console.error('Failed to get users:', error);
          throw error;
        })
      );
  }

  
  login(authRequest: AuthenticationRequest, userType: 'user' | 'admin') {
    let loginUrl = userType === 'user' ? 'authenticate' : 'admin-authenticate';
    return this.http.post<AuthenticationResponse>(`${this.baseUrl}/${loginUrl}`, authRequest)
      .pipe(
        catchError(error => {
          console.error('Login failed:', error);
          throw error; // Rethrow the error to propagate it to the caller
        }),
        map(response => ({ response, userType }))
      );
  }
  

  deleteUsers(id : number)
  {
    return this.http.delete(this.baseUrl +'/deleteUser?id=' +id)
  }
  
  public updateUsers(user: any) {
    return this.http.put(this.baseUrl + '/updateUser', user)
      .pipe(
        catchError(error => {
          console.error('Update failed:', error);
          throw error; // Rethrow the error to propagate it to the caller
        })
      );
  }
  

  verifyCode(verificationRequest: VerificationRequest) {
    return this.http.post<AuthenticationResponse>
    (`${this.baseUrl}/verify`, verificationRequest);
  }

  loggedIn(): boolean {
    return !!localStorage.getItem('token');
  }

  logoutUser(): void {
    localStorage.removeItem('token');
    this.router.navigate(['/home']);
  }

forgotPassword( data:any)
{
  return this.http.post(this.baseUrl+"forgotpassword", data,{
    headers:new HttpHeaders().set('Content-Type','application/json')
  } )
}








}
