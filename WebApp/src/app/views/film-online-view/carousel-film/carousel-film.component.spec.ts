import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CarouselFilmComponent } from './carousel-film.component';

describe('CarouselFilmComponent', () => {
  let component: CarouselFilmComponent;
  let fixture: ComponentFixture<CarouselFilmComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CarouselFilmComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CarouselFilmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
