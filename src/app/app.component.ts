import { Component, NgModule } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TariffListModule } from '../components/tariff-list/tariff-list.module';
import { ComparisonListModule } from '../components/comparison-list/comparison-list.module';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,TariffListModule,ComparisonListModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'electricity-tariff-comparator';
}
