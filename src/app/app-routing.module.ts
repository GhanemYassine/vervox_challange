import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TariffListComponent } from './../components/tariff-list/tariff-list.component';
import { ComparisonPageComponent } from './../components/comparison-page/comparison-page/comparison-page.component';

const routes: Routes = [
  { path: '', component: TariffListComponent },
  { path: 'comparison', component: ComparisonPageComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
