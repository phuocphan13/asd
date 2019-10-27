import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FilmOnlineDetailViewComponent } from './film-online-detail-view.component';

describe('FilmOnlineDetailViewComponent', () => {
  let component: FilmOnlineDetailViewComponent;
  let fixture: ComponentFixture<FilmOnlineDetailViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FilmOnlineDetailViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FilmOnlineDetailViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
