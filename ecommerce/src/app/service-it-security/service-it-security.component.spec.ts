import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServiceItSecurityComponent } from './service-it-security.component';

describe('ServiceItSecurityComponent', () => {
  let component: ServiceItSecurityComponent;
  let fixture: ComponentFixture<ServiceItSecurityComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ServiceItSecurityComponent]
    });
    fixture = TestBed.createComponent(ServiceItSecurityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
