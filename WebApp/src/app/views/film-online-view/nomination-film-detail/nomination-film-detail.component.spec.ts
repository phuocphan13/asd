import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NominationFilmDetailComponent } from './nomination-film-detail.component';

describe('NominationFilmDetailComponent', () => {
  let component: NominationFilmDetailComponent;
  let fixture: ComponentFixture<NominationFilmDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NominationFilmDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NominationFilmDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
