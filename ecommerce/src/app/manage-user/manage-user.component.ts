import { AuthenticationService } from 'src/app/services/authentification.service';
import { Component, OnInit } from '@angular/core';
import { NavbarService } from '../services/navbar.service';
import { FooterService } from '../services/footer.service';
import { RegisterRequest } from '../models/register-request';
import { AuthenticationResponse } from '../models/authentification-response';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';


@Component({
  selector: 'app-manage-user',
  templateUrl: './manage-user.component.html',
  styleUrls: ['./manage-user.component.css']
})
export class ManageUserComponent implements OnInit {
  registerForm: NgForm;
  registerRequest: RegisterRequest = {};
  authResponse: AuthenticationResponse = {};
  message = '';
  otpCode = '';
  UserDetails = null as any;



  UserToUpdate = {
    id: "",
    firstname: "", // Add this line
    lastname: "",
    email: "",
    password: ""
};

  constructor(
    private navbarService: NavbarService,
    private footerService: FooterService,
    private router: Router,
    private authService: AuthenticationService
    
  ) {
    this.registerForm = {} as NgForm;
  this.getUserDetails();

  }

    register() {
    this.message = '';
    this.authService.registerUser(this.registerRequest)
      .subscribe({
        next: (response) => {
          this.getUserDetails();
          if (response) {
            this.authResponse = response;
           
          } 
        }
      });

  }
 



  getUserDetails() {
    this.authService.getUsers()
    .subscribe(
      (resp) => {
        console.log(resp);
        this.UserDetails = resp;
        
      },
      (err) => {
        console.log(err);
      }
    );
  }
  deleteUsers(user: any) {
    this.authService.deleteUsers(user.id).subscribe(
      (resp) => {
        console.log(resp);
        this.getUserDetails();
      },
      (err) => {
        console.log(err);
      }
    );
  }
  ngOnInit(): void {
    this.navbarService.hide();
    this.footerService.hide();
    this.getUserDetails();
  }

  ngOnDestroy(): void {
    this.navbarService.display();
    this.footerService.display();
  }


  edit(user: any){
    this.UserToUpdate = user;
  
  }


  updateUser() {
    if (this.UserToUpdate) {
      this.authService.updateUsers(this.UserToUpdate).subscribe(
        (resp) => {
          console.log(resp);
        },
        (err) => {
          console.log(err);
        }
      );
    } 
  }
  
  
}
