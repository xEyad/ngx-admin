import { NgxChartsModule } from '@swimlane/ngx-charts';
import { NgModule } from '@angular/core';
import { NbCardModule, NbProgressBarModule } from '@nebular/theme';

import { ThemeModule } from '../../@theme/theme.module';
import { DashboardComponent } from './dashboard.component';
import { SimpleCardComponent } from './simple-card/simple-card.component';
import { UsersChartComponent } from './users-chart/users-chart.component';
import { LineChartComponent } from './../dashboard/line-chart/line-chart.component';
import { ChartjsModule } from '@ctrl/ngx-chartjs';
import { SocialCardsComponent } from './social-cards/social-cards.component';
import { ExpensesComponent } from './expenses/expenses.component';
import { EmployeesComponent } from './employees/employees.component';
@NgModule({
  imports: [
    NbCardModule,
    ThemeModule,
    NgxChartsModule,
    ChartjsModule,
    NbProgressBarModule
  ],
  declarations: [
    DashboardComponent,
    SimpleCardComponent,
    UsersChartComponent,
    LineChartComponent,
    SocialCardsComponent,
    ExpensesComponent,
    EmployeesComponent
  ],
})
export class DashboardModule { }
