import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NominationFilmViewComponent } from './nomination-film-view.component';

describe('NominationFilmViewComponent', () => {
  let component: NominationFilmViewComponent;
  let fixture: ComponentFixture<NominationFilmViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NominationFilmViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NominationFilmViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
