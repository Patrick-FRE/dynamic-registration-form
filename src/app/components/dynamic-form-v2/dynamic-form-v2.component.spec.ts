import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DynamicFormV2Component } from './dynamic-form-v2.component';

describe('DynamicFormV2Component', () => {
  let component: DynamicFormV2Component;
  let fixture: ComponentFixture<DynamicFormV2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DynamicFormV2Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DynamicFormV2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
