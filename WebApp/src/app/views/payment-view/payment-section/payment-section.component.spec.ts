import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PaymentSectionComponent } from './payment-section.component';

describe('PaymentSectionComponent', () => {
  let component: PaymentSectionComponent;
  let fixture: ComponentFixture<PaymentSectionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PaymentSectionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PaymentSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
