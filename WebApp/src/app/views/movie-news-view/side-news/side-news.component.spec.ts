import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SidenewsSectionComponent } from './side-news.component';

describe('SidenewsSectionComponent', () => {
  let component: SidenewsSectionComponent;
  let fixture: ComponentFixture<SidenewsSectionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SidenewsSectionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SidenewsSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
