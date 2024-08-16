import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { TariffService } from '../../services/tariff.service';

@Component({
  selector: 'app-tariff-filter',
  templateUrl: './tariff-filter.component.html',
  styleUrls: ['./tariff-filter.component.scss']
})
export class TariffFilterComponent implements OnInit {
  filterForm: FormGroup;

  constructor(private fb: FormBuilder, private tariffService: TariffService) {
    this.filterForm = this.fb.group({
      search: [''],
      sort: ['price'] // or other fields
    });
  }

  ngOnInit(): void {
    this.filterForm.valueChanges.subscribe(filters => {
      //this.tariffService.filterAndSortTariffs(filters);
    });
  }
}
