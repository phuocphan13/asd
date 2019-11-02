import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CarouselFilmDetailComponent } from './carousel-film-detail.component';

describe('CarouselFilmDetailComponent', () => {
  let component: CarouselFilmDetailComponent;
  let fixture: ComponentFixture<CarouselFilmDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CarouselFilmDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CarouselFilmDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
