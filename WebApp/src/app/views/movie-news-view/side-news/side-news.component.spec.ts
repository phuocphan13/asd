import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SidenewsComponent } from './side-news.component';

describe('SidenewsSectionComponent', () => {
  let component: SidenewsComponent;
  let fixture: ComponentFixture<SidenewsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SidenewsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SidenewsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
