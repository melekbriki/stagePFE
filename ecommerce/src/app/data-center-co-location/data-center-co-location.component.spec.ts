import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DataCenterCoLocationComponent } from './data-center-co-location.component';

describe('DataCenterCoLocationComponent', () => {
  let component: DataCenterCoLocationComponent;
  let fixture: ComponentFixture<DataCenterCoLocationComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DataCenterCoLocationComponent]
    });
    fixture = TestBed.createComponent(DataCenterCoLocationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
