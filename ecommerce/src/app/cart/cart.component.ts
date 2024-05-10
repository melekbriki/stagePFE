import { Component, OnDestroy, OnInit } from '@angular/core';
import { NavbarService } from '../services/navbar.service';
import { FooterService } from '../services/footer.service';
import { AdminService } from '../services/admin.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { FormBuilder } from '@angular/forms';
import { AuthenticationService } from '../services/authentification.service';
import { Subject } from 'rxjs';
interface CartItem {
  productName: string;
  price: number;
  quantity: number;
  processedImg: string;
  returnedImg: string;
  // Ajoutez d'autres propriétés si nécessaire
}

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})

export class CartComponent implements OnInit {

  cartItems:any[]=[];
  order:any;
  private unsubscribe$: Subject<void> = new Subject<void>();


  constructor(  private navbarService: NavbarService,
    private footerService: FooterService,
    private adminService : AdminService,
    private snackBar: MatSnackBar,
    private fb : FormBuilder,
    private authService: AuthenticationService,){}

ngOnInit(){
 this.navbarService.hide();
  this.footerService.hide();
  this.getCart();
}
ngOnDestroy(): void {
  this.navbarService.display();
  this.footerService.display();
}
getCart(){
  this.cartItems=[];
  this.adminService.getCartByUserId().subscribe(res =>{
    this.order = res;
   res.cartItems.forEach((element: CartItem) => {
     element.processedImg = 'data:image/jpeg;base64,' + element.returnedImg;
      this.cartItems.push(element);
    });
  })
}

}
