import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ForgottenModalComponent } from './forgotten.modal.component';

describe('ForgottenModalComponent', () => {
  let component: ForgottenModalComponent;
  let fixture: ComponentFixture<ForgottenModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ForgottenModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ForgottenModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
