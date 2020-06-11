import { NgxChartsModule } from '@swimlane/ngx-charts';
import { NgModule } from '@angular/core';
import { NbCardModule } from '@nebular/theme';

import { ThemeModule } from '../../@theme/theme.module';
import { DashboardComponent } from './dashboard.component';
import { SimpleCardComponent } from './simple-card/simple-card.component';
import { UsersChartComponent } from './users-chart/users-chart.component';
import { LineChartComponent } from './../dashboard/line-chart/line-chart.component';
import { ChartjsModule } from '@ctrl/ngx-chartjs';
@NgModule({
  imports: [
    NbCardModule,
    ThemeModule,
    NgxChartsModule,
    ChartjsModule
  ],
  declarations: [
    DashboardComponent,
    SimpleCardComponent,
    UsersChartComponent,
    LineChartComponent
  ],
})
export class DashboardModule { }
