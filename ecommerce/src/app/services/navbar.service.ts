import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { AuthenticationService } from './authentification.service';

@Injectable({
  providedIn: 'root'
})
export class NavbarService {


  showNavbar: BehaviorSubject<boolean>;

  constructor( private authService: AuthenticationService) { 
    this.showNavbar= new BehaviorSubject(true);
  }

  hide()
  {
    this.showNavbar.next(false);
  }

  display()
  {
    this.showNavbar.next(true);
  }
}
