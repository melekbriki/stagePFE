import { Component, OnInit } from '@angular/core';
import { NavbarService } from '../services/navbar.service';
import { FooterService } from '../services/footer.service';

@Component({
  selector: 'app-manage-product',
  templateUrl: './manage-product.component.html',
  styleUrls: ['./manage-product.component.css']
})
export class ManageProductComponent implements OnInit {

  constructor(
   

    private navbarService: NavbarService,
    private footerService: FooterService,
  
   
  ) {}


  ngOnInit(): void {
    this.navbarService.hide();
    this.footerService.hide();
    
  }

  

  ngOnDestroy(): void {
    this.navbarService.display();
    this.footerService.display();
  }
}
