import { FooterService } from './../services/footer.service';
import { Component, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnDestroy {
  showFooter: boolean = true;
  subscription: Subscription;

  constructor(private footerService: FooterService) {
    this.subscription = this.footerService.showFooter.subscribe((value) => {
      this.showFooter = value;
    });
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
