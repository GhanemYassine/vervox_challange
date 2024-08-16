// src/app/components/tariff-list/tariff-list.component.spec.ts
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TariffListComponent } from './tariff-list.component';
import { TariffService } from '../../services/tariff.service';
import { of } from 'rxjs';

describe('TariffListComponent', () => {
  let component: TariffListComponent;
  let fixture: ComponentFixture<TariffListComponent>;
  let mockTariffService: jasmine.SpyObj<TariffService>;

  beforeEach(async () => {
    mockTariffService = jasmine.createSpyObj('TariffService', ['getTariffs']);
    mockTariffService.loadTariffs.and.returnValue(of([
      { id: 1, name: 'Tariff A', price: 3.5, supplier: 'Company A', description: 'Description of Tariff A' },
      { id: 2, name: 'Tariff B', price: 4.0, supplier: 'Company B', description: 'Description of Tariff B' }
    ]));

    await TestBed.configureTestingModule({
      declarations: [ TariffListComponent ],
      providers: [{ provide: TariffService, useValue: mockTariffService }]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TariffListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should display tariffs', () => {
    const compiled = fixture.nativeElement;
    expect(compiled.querySelectorAll('.tariff-item').length).toBe(2);
    expect(compiled.querySelector('.tariff-item h3').textContent).toContain('Tariff A');
  });

  it('should call sortTariffs on selection change', () => {
    const compiled = fixture.nativeElement;
    const selectElement = compiled.querySelector('#sortOrder');
    selectElement.value = 'desc';
    selectElement.dispatchEvent(new Event('change'));

    fixture.detectChanges();

    expect(mockTariffService.sortTariffsByPrice).toHaveBeenCalledWith('desc');
  });

  it('should add a tariff to comparison list when "Add to Compare" button is clicked', () => {
    const compiled = fixture.nativeElement;
    const button = compiled.querySelector('button');
    button.click();

    fixture.detectChanges();

    expect(mockTariffService.addToComparison).toHaveBeenCalled();
  });

  it('should have a link to navigate to the comparison page', () => {
    const compiled = fixture.nativeElement;
    const button = compiled.querySelector('button[routerLink="/compare"]');
    expect(button).toBeTruthy();
  });
});
