import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Component, OnInit } from '@angular/core';
import { NavbarService } from '../services/navbar.service';
import { FooterService } from '../services/footer.service';
import { AdminService } from '../services/admin.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthenticationService } from '../services/authentification.service';

@Component({
  selector: 'app-computer-hardware',
  templateUrl: './computer-hardware.component.html',
  styleUrls: ['./computer-hardware.component.css']
})
export class ComputerHardwareComponent implements OnInit {
  userEmail: string = '';
  searchProductForm! : FormGroup;
  products: any[] =[];
 userId: number = 0;
  //userId: number;
  constructor(
   

    private navbarService: NavbarService,
    private footerService: FooterService,
    private adminService : AdminService,
    private snackBar: MatSnackBar,
    private fb : FormBuilder,
    private authService: AuthenticationService,
  ) {
        this.userId = 2;
       // this.userId = 5;
       
       
   
  }



  ngOnInit(): void {
    this.navbarService.hide();
    this.footerService.hide();
    this.getAllProducts(); 

    

   // const userId  = this.authService.getUserId();
  
    this.searchProductForm = this.fb.group({
      title: [null, [Validators.required]]
    })

    

    //const userId = this.userId = this.authService.getUserId();


 
  }
  submitForm(){
    this.products = [];
    const title = this.searchProductForm.get('title')!.value;
    this.adminService.getAllProductsByName(title).subscribe(res => {
      res.forEach((element: any) => { // Iterate over 'res' directly
        element.processedImg = 'data:image/jpeg;base64,' + element.byteImg;
        this.products.push(element);
      });
    });
  }
  
  

  ngOnDestroy(): void {
    this.navbarService.display();
    this.footerService.display();
  }

  getAllProducts() {
    this.products = [];
    this.adminService.getAllProducts().subscribe(res => {
      res.forEach((element: any) => { // Iterate over 'res' directly
        element.processedImg = 'data:image/jpeg;base64,' + element.byteImg;
        this.products.push(element);
      });
      console.log(this.products)
    })
  }

  addToCart(productId: any) {
    const userId =this.authService.getUserId(); 
    this.adminService.addToCart({ productId: productId ,userId}).subscribe(
      (res) => {
        this.snackBar.open('Product added to cart successfully', 'Close', { duration: 5000 });
      },
      (error) => {
        console.error('Failed to add product to cart', error);
        this.snackBar.open('Failed to add product to cart. Please try again.', 'Error', { duration: 5000 });
      }
    );
  }
  
}