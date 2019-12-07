import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MoreTvNewsComponent } from './more-tv-news.component';

describe('MoreTvNewsComponent', () => {
  let component: MoreTvNewsComponent;
  let fixture: ComponentFixture<MoreTvNewsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MoreTvNewsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MoreTvNewsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
