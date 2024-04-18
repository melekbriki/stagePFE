import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DatabaseManagementComponent } from './database-management.component';

describe('DatabaseManagementComponent', () => {
  let component: DatabaseManagementComponent;
  let fixture: ComponentFixture<DatabaseManagementComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DatabaseManagementComponent]
    });
    fixture = TestBed.createComponent(DatabaseManagementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
