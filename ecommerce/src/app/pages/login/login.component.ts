import { FooterComponent } from './../../footer/footer.component';
import { NavbarService } from './../../services/navbar.service';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationRequest } from 'src/app/models/authentification-request';
import { AuthenticationResponse } from 'src/app/models/authentification-response';
import { VerificationRequest } from 'src/app/models/verification-request';
import { AuthenticationService } from 'src/app/services/authentification.service';
import { FooterService } from 'src/app/services/footer.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit, OnDestroy {
  authRequest: AuthenticationRequest = {};
  userType: 'user' | 'admin' = 'user'; // Default user type is 'user'
  otpCode = '';
  authResponse: AuthenticationResponse = {};

  constructor(
    private authService: AuthenticationService,
    private router: Router,
    private navbarService: NavbarService,
    private footerService: FooterService
  ) {}

  ngOnInit(): void {
    this.navbarService.hide();
    this.footerService.hide();
  }

  ngOnDestroy(): void {
    this.navbarService.display();
    this.footerService.display();
  }

  
  // login.component.ts
  authenticate() {
    if (this.authRequest && this.authRequest.email) {
      this.authService.login(this.authRequest, this.userType)
        .subscribe(({ response, userType }) => {
          console.log('User type:', userType); // Add this line to check the value of userType
          this.authResponse = response;
          if (!this.authResponse.mfaEnabled) {
            localStorage.setItem('token', response.accessToken as string);
            const isAdmin = this.isAdminUser(this.authRequest.email!); // Use the non-null assertion operator (!) to tell TypeScript that email is not undefined
            this.handleUserNavigation(isAdmin);
          }
        });
    } else {
      console.error('Auth request or email is null or undefined');
      // Handle the error or log it appropriately
    }
  }
  
  

isAdminUser(email: string): boolean {
  // Implement logic to check if the email belongs to an admin
  return email.endsWith('admin@mail.com'); // Example logic, replace with your actual admin check
}

private handleUserNavigation(isAdmin: boolean) {
  if (isAdmin) {
    this.router.navigate(['dashbord']); // Admin navigates to welcome
  } else {
    this.router.navigate(['home']); // Regular user navigates to home
  }
}

  
  verifyCode() {
    const verifyRequest: VerificationRequest = {
      email: this.authRequest.email,
      code: this.otpCode
    };
    this.authService.verifyCode(verifyRequest)
      .subscribe({
        next: (response) => {
          localStorage.setItem('token', response.accessToken as string);
          this.router.navigate(['home']);
        }
      });
  }
}
