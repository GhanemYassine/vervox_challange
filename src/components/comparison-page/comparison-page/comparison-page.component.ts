// src/app/components/comparison-page/comparison-page.component.ts
import { Component, OnInit } from '@angular/core';
import { TariffService } from '../../../services/tariff.service';
import { Tariff } from '../../../app/models/mocked_data';

@Component({
  selector: 'app-comparison-page',
  templateUrl: './comparison-page.component.html',
  styleUrls: ['./comparison-page.component.scss']
})
export class ComparisonPageComponent implements OnInit {
  comparisonList: Tariff[] = [];

  constructor(private tariffService: TariffService) {}

  ngOnInit(): void {
    this.tariffService.comparisonList$.subscribe(list => {
      this.comparisonList = list;
    });
  }
}
