import { AdminService } from './../services/admin.service';
import { Component, OnInit } from '@angular/core';
import { NavbarService } from '../services/navbar.service';
import { FooterService } from '../services/footer.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-dashbord',
  templateUrl: './dashbord.component.html',
  styleUrls: ['./dashbord.component.css']
})
export class DashbordComponent implements OnInit {

  products: any[] =[];
  searchProductForm! : FormGroup;

  constructor(
   

    private navbarService: NavbarService,
    private footerService: FooterService,
    private adminService : AdminService,
    private fb : FormBuilder
  ) {}

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
  




  ngOnInit(): void {
    this.navbarService.hide();
    this.footerService.hide();
    this.getAllProducts();

    this.searchProductForm = this.fb.group({
      title: [null, [Validators.required]]
    })
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

}
