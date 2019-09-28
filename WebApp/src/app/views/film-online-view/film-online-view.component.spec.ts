import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FilmOnlineViewComponent } from './film-online-view.component';

describe('FilmOnlineViewComponent', () => {
  let component: FilmOnlineViewComponent;
  let fixture: ComponentFixture<FilmOnlineViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FilmOnlineViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FilmOnlineViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
