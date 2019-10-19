import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowSeatViewComponent } from './show-seat-view.component';

describe('ShowSeatViewComponent', () => {
  let component: ShowSeatViewComponent;
  let fixture: ComponentFixture<ShowSeatViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShowSeatViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowSeatViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
