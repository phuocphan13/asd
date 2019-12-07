import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FilmOnlinePosterDetailComponent } from './film-online-poster-detail.component';

describe('FilmOnlinePosterDetailComponent', () => {
  let component: FilmOnlinePosterDetailComponent;
  let fixture: ComponentFixture<FilmOnlinePosterDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FilmOnlinePosterDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FilmOnlinePosterDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
