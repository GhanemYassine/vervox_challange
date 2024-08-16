import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComparisonListComponent } from './comparison-list.component';
import { TariffService } from '../../services/tariff.service';

describe('ComparisonListComponent', () => {
  let component: ComparisonListComponent;
  let fixture: ComponentFixture<ComparisonListComponent>;
  let mockTariffService: jasmine.SpyObj<TariffService>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ComparisonListComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ComparisonListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should remove a tariff from the comparison list when "Remove" button is clicked', () => {
    const compiled = fixture.nativeElement;
    const button = compiled.querySelector('button');
    button.click();

    fixture.detectChanges();

    expect(mockTariffService.removeFromComparison).toHaveBeenCalled();
  });
  
});
