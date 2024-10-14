import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MedicineShoppingComponent } from './medicine-shopping.component';

describe('MedicineShoppingComponent', () => {
  let component: MedicineShoppingComponent;
  let fixture: ComponentFixture<MedicineShoppingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MedicineShoppingComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MedicineShoppingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
