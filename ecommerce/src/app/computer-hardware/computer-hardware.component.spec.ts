import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComputerHardwareComponent } from './computer-hardware.component';

describe('ComputerHardwareComponent', () => {
  let component: ComputerHardwareComponent;
  let fixture: ComponentFixture<ComputerHardwareComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ComputerHardwareComponent]
    });
    fixture = TestBed.createComponent(ComputerHardwareComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
