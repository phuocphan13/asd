import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OfflineMovieSearchViewComponent } from './offline-movie-search-view.component';

describe('OfflineMovieSearchViewComponent', () => {
  let component: OfflineMovieSearchViewComponent;
  let fixture: ComponentFixture<OfflineMovieSearchViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OfflineMovieSearchViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OfflineMovieSearchViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
