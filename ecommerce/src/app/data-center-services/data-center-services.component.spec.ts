import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DataCenterServicesComponent } from './data-center-services.component';

describe('DataCenterServicesComponent', () => {
  let component: DataCenterServicesComponent;
  let fixture: ComponentFixture<DataCenterServicesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DataCenterServicesComponent]
    });
    fixture = TestBed.createComponent(DataCenterServicesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
