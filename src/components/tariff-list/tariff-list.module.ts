import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TariffListComponent } from './tariff-list.component';

@NgModule({
  declarations: [TariffListComponent],
  imports: [CommonModule],
  exports: [TariffListComponent]
})
export class TariffListModule {}