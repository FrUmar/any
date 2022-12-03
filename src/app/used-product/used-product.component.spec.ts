import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UsedProductComponent } from './used-product.component';

describe('UsedProductComponent', () => {
  let component: UsedProductComponent;
  let fixture: ComponentFixture<UsedProductComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UsedProductComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UsedProductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
