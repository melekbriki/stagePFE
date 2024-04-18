import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NetworkManagementComponent } from './network-management.component';

describe('NetworkManagementComponent', () => {
  let component: NetworkManagementComponent;
  let fixture: ComponentFixture<NetworkManagementComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NetworkManagementComponent]
    });
    fixture = TestBed.createComponent(NetworkManagementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
