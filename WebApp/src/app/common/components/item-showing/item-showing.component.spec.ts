import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ItemShowingComponent } from './item-showing.component';

describe('ItemShowingComponent', () => {
  let component: ItemShowingComponent;
  let fixture: ComponentFixture<ItemShowingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ItemShowingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ItemShowingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
