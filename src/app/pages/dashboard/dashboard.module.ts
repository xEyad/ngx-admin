import { NgxChartsModule } from '@swimlane/ngx-charts';
import { NgModule } from '@angular/core';
import { NbCardModule } from '@nebular/theme';

import { ThemeModule } from '../../@theme/theme.module';
import { DashboardComponent } from './dashboard.component';
import { SimpleCardComponent } from './simple-card/simple-card.component';
import { UsersChartComponent } from './users-chart/users-chart.component';

@NgModule({
  imports: [
    NbCardModule,
    ThemeModule,
    NgxChartsModule,
  ],
  declarations: [
    DashboardComponent,
    SimpleCardComponent,
    UsersChartComponent,
  ],
})
export class DashboardModule { }
