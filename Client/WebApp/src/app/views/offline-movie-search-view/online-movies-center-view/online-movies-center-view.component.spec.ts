import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OnlineMoviesCenterViewComponent } from './online-movies-center-view.component';

describe('OnlineMoviesCenterViewComponent', () => {
  let component: OnlineMoviesCenterViewComponent;
  let fixture: ComponentFixture<OnlineMoviesCenterViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OnlineMoviesCenterViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OnlineMoviesCenterViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
