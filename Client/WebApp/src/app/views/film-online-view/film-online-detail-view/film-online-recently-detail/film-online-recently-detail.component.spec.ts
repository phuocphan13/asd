import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FilmOnlineRecentlyDetailComponent } from './film-online-recently-detail.component';

describe('FilmOnlineRecentlyDetailComponent', () => {
  let component: FilmOnlineRecentlyDetailComponent;
  let fixture: ComponentFixture<FilmOnlineRecentlyDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FilmOnlineRecentlyDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FilmOnlineRecentlyDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
