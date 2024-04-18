import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServiceDigitalTransformationComponent } from './service-digital-transformation.component';

describe('ServiceDigitalTransformationComponent', () => {
  let component: ServiceDigitalTransformationComponent;
  let fixture: ComponentFixture<ServiceDigitalTransformationComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ServiceDigitalTransformationComponent]
    });
    fixture = TestBed.createComponent(ServiceDigitalTransformationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
