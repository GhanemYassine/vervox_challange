import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ComparisonListComponent } from './comparison-list.component';

@NgModule({
  declarations: [ComparisonListComponent],
  imports: [CommonModule],
  exports: [ComparisonListComponent]
})
export class ComparisonListModule {}