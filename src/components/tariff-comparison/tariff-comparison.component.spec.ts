import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TariffComparisonComponent } from './tariff-comparison.component';

describe('TariffComparisonComponent', () => {
  let component: TariffComparisonComponent;
  let fixture: ComponentFixture<TariffComparisonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TariffComparisonComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TariffComparisonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
