import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TimeMovieCinemaComponent } from './time-movie-cinema.component';

describe('TimeMovieCinemaComponent', () => {
  let component: TimeMovieCinemaComponent;
  let fixture: ComponentFixture<TimeMovieCinemaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TimeMovieCinemaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TimeMovieCinemaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
