import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManagedServicessComponent } from './managed-servicess.component';

describe('ManagedServicessComponent', () => {
  let component: ManagedServicessComponent;
  let fixture: ComponentFixture<ManagedServicessComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ManagedServicessComponent]
    });
    fixture = TestBed.createComponent(ManagedServicessComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
