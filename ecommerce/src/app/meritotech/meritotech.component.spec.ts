import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MeritotechComponent } from './meritotech.component';

describe('MeritotechComponent', () => {
  let component: MeritotechComponent;
  let fixture: ComponentFixture<MeritotechComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MeritotechComponent]
    });
    fixture = TestBed.createComponent(MeritotechComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
