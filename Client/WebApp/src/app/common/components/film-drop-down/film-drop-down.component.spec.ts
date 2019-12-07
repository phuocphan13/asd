import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FilmDropDownComponent } from './film-drop-down.component';

describe('FilmDropDownComponent', () => {
  let component: FilmDropDownComponent;
  let fixture: ComponentFixture<FilmDropDownComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FilmDropDownComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FilmDropDownComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
