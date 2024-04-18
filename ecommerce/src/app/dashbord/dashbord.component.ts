import { Component } from '@angular/core';
import { NavbarService } from '../services/navbar.service';
import { FooterService } from '../services/footer.service';

@Component({
  selector: 'app-dashbord',
  templateUrl: './dashbord.component.html',
  styleUrls: ['./dashbord.component.css']
})
export class DashbordComponent {

  constructor(
   

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

}
