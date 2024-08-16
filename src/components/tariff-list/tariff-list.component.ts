import { Component, NgModule, OnInit } from '@angular/core';
import { TariffService } from '../../services/tariff.service';
import { Tariff } from '../../app/models/mocked_data';
import { Observable } from 'rxjs';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-tariff-list',
  templateUrl: './tariff-list.component.html',
  styleUrls: ['./tariff-list.component.scss']
})
export class TariffListComponent implements OnInit {
  tariffs$: Observable<Tariff[]> = new Observable<Tariff[]>();
  comparisonList$: Observable<Tariff[]> = new Observable<Tariff[]>();
  comparisonList: Tariff[] = [];
  constructor(private tariffService: TariffService) {}

  ngOnInit(): void {
    this.tariffs$ = this.tariffService.loadTariffs();
    this.comparisonList$ = this.tariffService.comparisonList$;
  }

  sortTariffs(event: Event): void {
    const target = event.target as HTMLSelectElement;
    const sortOrder = target.value;
    if (sortOrder) {
      this.tariffService.sortTariffsByPrice(sortOrder as 'asc' | 'desc');
      console.log(`Sorting tariffs in ${sortOrder} order`);
    }
    
  }

  addToCompare(tariff: Tariff): void {
    this.tariffService.addToComparison(tariff);
  }

  isInComparisonList(tariff: Tariff): boolean {
    return Array.isArray(this.comparisonList) && this.comparisonList.some(t => t.id === tariff.id);
  }
}
