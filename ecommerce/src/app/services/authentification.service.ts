
  import { Injectable } from '@angular/core';
  import { HttpClient, HttpHeaders } from '@angular/common/http';
  import { RegisterRequest } from '../models/register-request';
  import { VerificationRequest } from '../models/verification-request';
  import { Router } from '@angular/router';
  import { AuthenticationResponse } from '../models/authentification-response';
  import { AuthenticationRequest } from '../models/authentification-request';
  import { Observable, catchError, map, of, tap } from 'rxjs';
  import { Token } from '@angular/compiler';



  @Injectable({
    providedIn: 'root'
  })
  export class AuthenticationService {
    
    private userId: string | null = null;
    private jwtToken: string | null = null;
   // setUserId(userId: string): void {
     // this.userId = userId;
   // }

    


    private baseUrl = 'http://localhost:8080/api/v1/auth';

    constructor(
      private http: HttpClient,
      private router: Router
    ) { 
      this.userId = localStorage.getItem('userId');
    }

    
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
    getEmail(): string | null {
      // Implement your logic to retrieve the user's email here
      // For example, you can use localStorage or sessionStorage to store the user's email
      return localStorage.getItem('userEmail');
    }
    setUserId(userId: string): void {
      this.userId = userId;
      localStorage.setItem('userId', userId); // Assuming 'userId' is the key used to store the user ID
      console.log('User ID stored in local storage:', userId);
    }
    
    getUserId(): any {
      const user = localStorage.getItem('userId');
      return user ? JSON.parse(user).id : null;
  }
  getUserIda(): Observable<string | null> {
    return of(localStorage.getItem('userId'));
  }

// getUserIda(): Observable<number> {
 // return this.http.get<number>(`${this.baseUrl}/userId`); // Assuming this endpoint does not require an ID
//}
    
    //getUserIdq(): Observable<number> {
      // Logique pour récupérer l'ID utilisateur depuis le backend
     // return this.http.get<number>(`${this.baseUrl}/userId`);
   // }
    
  
  //  getUserIds(): string | null {
   ////   return this.userId;
  //  }
    
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



  setJwtToken(token: string): void {
    this.jwtToken = token;
    localStorage.setItem('jwtToken', token); // Save the token in localStorage
    console.log('JWT Token:', this.jwtToken); // Log the JWT token value
  }

  getJwtToken(): string {
    const token = localStorage.getItem('jwtToken');
    console.log('Token:', token);
    return token || '';
  }


  clearJwtToken(): void {
    this.jwtToken = null;
    localStorage.removeItem('jwtToken'); // Remove the token from localStorage
  }

  refreshToken() {
    // Envoyer une requête au backend pour rafraîchir le token
    return this.http.post(`${this.baseUrl}/refresh-token`, {})
      .pipe(
        tap((response: any) => {
          // Mettre à jour le token dans le service d'authentification
          this.setJwtToken(response.jwtToken);
        }),
        catchError(error => {
          console.error('Failed to refresh token:', error);
          this.clearJwtToken(); // Effacer le token en cas d'erreur
          throw error; // Rethrow the error to propagate it to the caller
        })
      );
  }
  

  

  }
