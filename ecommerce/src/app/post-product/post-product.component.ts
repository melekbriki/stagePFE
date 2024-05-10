import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { AdminService } from '../services/admin.service';
import { AuthenticationService } from '../services/authentification.service';
import { NavbarService } from '../services/navbar.service';
import { FooterService } from '../services/footer.service';

@Component({
  selector: 'app-post-product',
  templateUrl: './post-product.component.html',
  styleUrls: ['./post-product.component.css']
})
export class PostProductComponent implements OnInit {
  products: any[] =[];
  productForm!: FormGroup;
  selectedFile!: File | null;
  imagePreview!: string | ArrayBuffer | null;
  listofCategories: any[] = [];

  constructor(private fb: FormBuilder,
    private router: Router,
    private snackBar: MatSnackBar,
    private adminService: AdminService,
    private authService: AuthenticationService,
    private navbarService: NavbarService,
    private footerService: FooterService,
  ) { }

  ngOnInit(): void {
    this.navbarService.hide();
    this.footerService.hide();
    this.getAllProducts();
    this.productForm = this.fb.group({
      categoryId: [null, [Validators.required]],
      name: [null, [Validators.required]],
      price: [null, [Validators.required]],
      description: [null, [Validators.required]],
    });

    this.adminService.getAllCategories().subscribe(
      (categories) => {
        this.listofCategories = categories;
      },
      (error) => {
        console.error('Failed to fetch categories', error);
        // Handle error
      }
    );
  }

  onFileSelected(event: any) {
    const file: File = event.target.files[0];
    if (file) {
      this.selectedFile = file;
      this.previewImage();
    }
  }

  previewImage() {
    if (this.selectedFile) {
      const reader = new FileReader();
      reader.onload = () => {
        this.imagePreview = reader.result;
      };
      reader.readAsDataURL(this.selectedFile);
    }
  }

  addProduct(): void {
    if (this.selectedFile && this.productForm.valid) {
      const formData: FormData = new FormData();

      formData.append('categoryId', this.productForm.get('categoryId')?.value ?? '');
      formData.append('name', this.productForm.get('name')?.value ?? '');
      formData.append('description', this.productForm.get('description')?.value ?? '');
      formData.append('price', String(this.productForm.get('price')?.value ?? ''));
      formData.append('img', this.selectedFile); // Include the file name

      const userId = this.authService.getUserId(); // Example: retrieve user ID from AuthService

      this.adminService.addProduct(formData, userId).subscribe(
        (res) => {
          if (res.id != null) {
            this.snackBar.open('Product Posted successfully', 'close', {
              duration: 5000
            });
            this.router.navigateByUrl('/dashbord');
          } else {
            this.snackBar.open('Failed to post product. Please try again.', 'error', {
              duration: 5000
            });
          }
        },
        (error) => {
          console.error('Failed to post product', error);
          this.snackBar.open('Failed to post product. Please try again.', 'error', {
            duration: 5000
          });
        }
      );
    } else {
      this.snackBar.open('Please fill out all required fields and select a valid image file.', 'error', {
        duration: 5000
      });
    }
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
    });
  }

  deleteProduct(productID: any,) {
    this.adminService.deletProduct(productID).subscribe(
      (res) => {
        // Delete product from local list
        this.products = this.products.filter((product) => product.id !== productID);
  
        setTimeout(() => {
          this.snackBar.open('Product Deleted successfully!', 'Close', {
            duration: 5000
          });
        }, 500); // Delay of 500 milliseconds
      },
      (error) => {
        console.error('Failed to delete product', error);
        this.snackBar.open('Failed to delete product. Please try again.', 'error', {
          duration: 5000
        });
      }
    );
  }
  

  //cbcbcvbcvb
}
