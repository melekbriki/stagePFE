import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EndUserInterfaceComponent } from './end-user-interface.component';

describe('EndUserInterfaceComponent', () => {
  let component: EndUserInterfaceComponent;
  let fixture: ComponentFixture<EndUserInterfaceComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EndUserInterfaceComponent]
    });
    fixture = TestBed.createComponent(EndUserInterfaceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
