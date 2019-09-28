import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FilmShowingViewComponent } from './film-showing-view.component';

describe('FilmShowingViewComponent', () => {
  let component: FilmShowingViewComponent;
  let fixture: ComponentFixture<FilmShowingViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FilmShowingViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FilmShowingViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
