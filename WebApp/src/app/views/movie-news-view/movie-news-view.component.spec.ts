import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MovieNewsViewComponent } from './movie-news-view.component';

describe('MovieNewsViewComponent', () => {
  let component: MovieNewsViewComponent;
  let fixture: ComponentFixture<MovieNewsViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MovieNewsViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MovieNewsViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
