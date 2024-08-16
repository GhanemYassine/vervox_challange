import { Component, OnInit } from '@angular/core';
import { TariffService } from '../../services/tariff.service';
import { Tariff } from '../../app/models/mocked_data';

@Component({
  selector: 'app-comparison-list',
  templateUrl: './comparison-list.component.html',
  styleUrls: ['./comparison-list.component.scss']
})
export class ComparisonListComponent implements OnInit {
  comparisonList: Tariff[] = [];

  constructor(private tariffService: TariffService) {}

  ngOnInit(): void {
    this.tariffService.comparisonList$.subscribe(list => {
      this.comparisonList = list;
    });
  }

  removeFromCompare(tariff: Tariff): void {
    this.tariffService.removeFromComparison(tariff);
  }
}