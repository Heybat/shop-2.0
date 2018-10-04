import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TopRatedProductsComponent } from './top-rated-products.component';

describe('TopRatedProductsComponent', () => {
  let component: TopRatedProductsComponent;
  let fixture: ComponentFixture<TopRatedProductsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TopRatedProductsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TopRatedProductsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
