import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CatagaryNavComponent } from './catagary-nav.component';

describe('CatagaryNavComponent', () => {
  let component: CatagaryNavComponent;
  let fixture: ComponentFixture<CatagaryNavComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CatagaryNavComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CatagaryNavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
