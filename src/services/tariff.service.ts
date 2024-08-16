// tariff.service.ts
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Tariff } from '../app/models/mocked_data';

@Injectable({
  providedIn: 'root'
})
export class TariffService {
  private tariffsSubject = new BehaviorSubject<Tariff[]>([]);
  tariffs$ = this.tariffsSubject.asObservable();

  private comparisonListSubject = new BehaviorSubject<Tariff[]>([]);
  comparisonList$ = this.comparisonListSubject.asObservable();

  constructor() {
    this.loadTariffs(); // Initialize with mock data
  }
  
  loadTariffs(): Observable<Tariff[]> {
    const mockTariffs: Tariff[] = [ {
      "id": 1,
      "name": "Tariff A",
      "price": 3.5,
      "supplier": "Company A",
      "description": "Description of Tariff A"
    }, {
      "id": 2,
      "name": "Tariff B",
      "price": 4.0,
      "supplier": "Company B",
      "description": "Description of Tariff B"
    }, {
      "id": 3,
      "name": "Tariff C",
      "price": 3.8,
      "supplier": "Company C",
      "description": "Description of Tariff C"
    }];
    this.tariffsSubject.next(mockTariffs);
    
    return this.tariffs$;
  }
  // More methods for sorting, filtering, and comparing

  sortTariffsByPrice(order: 'asc' | 'desc'): void {
    const sortedTariffs = [...this.tariffsSubject.getValue()].sort((a, b) => {
      return order === 'asc' ? a.price - b.price : b.price - a.price;
    });
    this.tariffsSubject.next(sortedTariffs);
  }

  addToComparison(tariff: Tariff): void {
    const currentList = this.comparisonListSubject.getValue();
    if (currentList.length < 3 && !currentList.some(t => t.id === tariff.id)) {
      this.comparisonListSubject.next([...currentList, tariff]);
    }
  }

  removeFromComparison(tariff: Tariff): void {
    const updatedList = this.comparisonListSubject.getValue().filter(t => t.id !== tariff.id);
    this.comparisonListSubject.next(updatedList);
  }

}
