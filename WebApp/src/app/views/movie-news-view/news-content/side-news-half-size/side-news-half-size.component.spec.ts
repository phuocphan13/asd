import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SidenewsHalfsizeComponent } from './side-news-half-size.component';

describe('SidenewsHalfsizeComponent', () => {
  let component: SidenewsHalfsizeComponent;
  let fixture: ComponentFixture<SidenewsHalfsizeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SidenewsHalfsizeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SidenewsHalfsizeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
