import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BillConfirmModalComponent } from './bill-confirm-modal.component';

describe('BillConfirmModalComponent', () => {
  let component: BillConfirmModalComponent;
  let fixture: ComponentFixture<BillConfirmModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BillConfirmModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BillConfirmModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
