import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FilmOnlineHomeViewComponent } from './film-online-home-view.component';

describe('FilmOnlineHomeViewComponent', () => {
  let component: FilmOnlineHomeViewComponent;
  let fixture: ComponentFixture<FilmOnlineHomeViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FilmOnlineHomeViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FilmOnlineHomeViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
