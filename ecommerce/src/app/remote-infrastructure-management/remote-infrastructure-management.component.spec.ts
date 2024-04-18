import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RemoteInfrastructureManagementComponent } from './remote-infrastructure-management.component';

describe('RemoteInfrastructureManagementComponent', () => {
  let component: RemoteInfrastructureManagementComponent;
  let fixture: ComponentFixture<RemoteInfrastructureManagementComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RemoteInfrastructureManagementComponent]
    });
    fixture = TestBed.createComponent(RemoteInfrastructureManagementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
