import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProcessOutSourceComponent } from './process-out-source.component';

describe('ProcessOutSourceComponent', () => {
  let component: ProcessOutSourceComponent;
  let fixture: ComponentFixture<ProcessOutSourceComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProcessOutSourceComponent]
    });
    fixture = TestBed.createComponent(ProcessOutSourceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
