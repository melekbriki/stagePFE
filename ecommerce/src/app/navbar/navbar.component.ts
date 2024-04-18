import { NavbarService } from './../services/navbar.service';
import { Component, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { AuthenticationService } from '../services/authentification.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnDestroy {
  showNavbar: boolean = true;
  subscription: Subscription;

  constructor(private navbarService: NavbarService,
                private authService: AuthenticationService,
                private _router: Router
              
    
    ) {
    this.subscription = this.navbarService.showNavbar.subscribe((value) => {
      this.showNavbar = value;
    });
  }
// In your NavbarComponent
isLoggedIn(): boolean {
  return this.authService.loggedIn();
}
logoutUser()
{
  localStorage.removeItem('token')
  
}

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  
}
