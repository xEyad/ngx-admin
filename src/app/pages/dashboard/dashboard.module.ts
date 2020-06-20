import { CommonModule } from '@angular/common';
import { SharedModule } from './../../shared.module';
import { EmployeeHistoryComponent } from './employee-history/employee-history.component';
import { ClickStopPropagation } from './../../@theme/directives/stopPropagation.directive';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { NgModule } from '@angular/core';

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
    SharedModule,
    ChartjsModule,
    CommonModule,
  ],
  declarations: [
    DashboardComponent,
    SimpleCardComponent,
    UsersChartComponent,
    LineChartComponent,
    SocialCardsComponent,
    ExpensesComponent,
    EmployeesComponent,
    ClickStopPropagation,
    EmployeeHistoryComponent
  ],
})
export class DashboardModule { }
