// src/app/services/tariff.service.spec.ts
import { TestBed } from '@angular/core/testing';
import { TariffService } from './tariff.service';
import { Tariff } from '../app/models/mocked_data';

describe('TariffService', () => {
  let service: TariffService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TariffService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should return mock tariffs', (done: DoneFn) => {
    service.loadTariffs().subscribe((tariffs: any[]) => {
      expect(tariffs.length).toBe(3);
      expect(tariffs[0].name).toBe('Tariff A');
      done();
    });
  });
  it('should sort tariffs by price in ascending order', () => {
    service.sortTariffsByPrice('asc');
    service.tariffs$.subscribe(tariffs => {
      expect(tariffs[0].price).toBe(3.5);
      expect(tariffs[1].price).toBe(3.8);
      expect(tariffs[2].price).toBe(4.0);
    });
  });

  it('should sort tariffs by price in descending order', () => {
    service.sortTariffsByPrice('desc');
    service.tariffs$.subscribe(tariffs => {
      expect(tariffs[0].price).toBe(4.0);
      expect(tariffs[1].price).toBe(3.8);
      expect(tariffs[2].price).toBe(3.5);
    });
  });
  it('should add a tariff to the comparison list', () => {
    const tariff: Tariff = { id: 1, name: 'Tariff A', price: 3.5, supplier: 'Company A', description: 'Description of Tariff A' };
    service.addToComparison(tariff);
    service.comparisonList$.subscribe(list => {
      expect(list.length).toBe(1);
      expect(list[0].id).toBe(1);
    });
  });

  it('should not add more than 3 tariffs to the comparison list', () => {
    const tariffs: Tariff[] = [
      { id: 1, name: 'Tariff A', price: 3.5, supplier: 'Company A', description: 'Description of Tariff A' },
      { id: 2, name: 'Tariff B', price: 4.0, supplier: 'Company B', description: 'Description of Tariff B' },
      { id: 3, name: 'Tariff C', price: 3.8, supplier: 'Company C', description: 'Description of Tariff C' }
    ];
    tariffs.forEach(tariff => service.addToComparison(tariff));
    const tariffToAdd: Tariff = { id: 4, name: 'Tariff D', price: 3.6, supplier: 'Company D', description: 'Description of Tariff D' };
    service.addToComparison(tariffToAdd);

    service.comparisonList$.subscribe(list => {
      expect(list.length).toBe(3);
      expect(list.some(t => t.id === 4)).toBeFalse();
    });
  });

  it('should remove a tariff from the comparison list', () => {
    const tariff: Tariff = { id: 1, name: 'Tariff A', price: 3.5, supplier: 'Company A', description: 'Description of Tariff A' };
    service.addToComparison(tariff);
    service.removeFromComparison(tariff);
    service.comparisonList$.subscribe(list => {
      expect(list.length).toBe(0);
    });
  });
});
