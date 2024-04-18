import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from '../services/authentification.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AdminService } from '../services/admin.service'; // Assuming you have imported the AdminService
import { FooterService } from '../services/footer.service';
import { NavbarService } from '../services/navbar.service';

@Component({
  selector: 'app-post-category',
  templateUrl: './post-category.component.html',
  styleUrls: ['./post-category.component.css']
})
export class PostCategoryComponent {

  categoryForm!: FormGroup;

  constructor(
    private router: Router,
    private authService: AuthenticationService,
    private fb: FormBuilder,
    private adminserv:AdminService,
    private navbarService: NavbarService,
    private footerService: FooterService,
  ) { }

  ngOnInit(): void {
    this.navbarService.hide();
    this.footerService.hide();
    this.categoryForm = this.fb.group({
      name: [null, [Validators.required]],
      description: [null, [Validators.required]],
    })
  }

  addCategory(): void {
    if (this.categoryForm.valid) {
      const userId = 'your_user_id_here'; // Replace 'your_user_id_here' with the actual user ID
      this.adminserv.addCategory(this.categoryForm.value, userId).subscribe(res => {
        if (res && res.id !== null) {
          this.router.navigateByUrl('/dashbord');
        }
      });
    } else {
      this.categoryForm.markAllAsTouched();
    }
  }
  ngOnDestroy(): void {
    this.navbarService.display();
    this.footerService.display();
  }
}
