import { EmployeeHistoryComponent } from './pages/dashboard/employee-history/employee-history.component';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { ThemeModule } from './@theme/theme.module';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import {
  NbIconModule,
  NbToastrModule,
  NbLayoutModule,
  NbCardModule,
  NbInputModule,
  NbCheckboxModule,
  NbButtonModule,
  NbProgressBarModule,
  NbSelectModule,
  NbListModule,
  NbAlertModule,
  NbMenuModule,
  NbPopoverModule,
  NbUserModule,
} from '@nebular/theme';
import { FormsModule } from '@angular/forms';
import {NgxMaterialTimepickerModule} from 'ngx-material-timepicker';
import {EditorModule} from 'primeng/editor';
import { NgxPaginationModule } from 'ngx-pagination';
@NgModule({
  declarations: [
  ],
  entryComponents:[EmployeeHistoryComponent],
  imports: [
    HttpClientModule,
    NbToastrModule,
    FormsModule,
    NbLayoutModule,
    NbCardModule,
    NbInputModule,
    NbCheckboxModule,
    NbButtonModule,
    NbProgressBarModule,
    NbSelectModule,
    NbListModule,
    NbAlertModule,
    NbCheckboxModule,
    NbPopoverModule,
    NbIconModule,
    NbMenuModule,
    ThemeModule,
    NgxChartsModule,
    NbUserModule,
    NgxMaterialTimepickerModule.setLocale('ar-EG'),
    EditorModule,
    NgxPaginationModule
  ],
  exports:[
    HttpClientModule,
    NbToastrModule,
    FormsModule,
    NbLayoutModule,
    NbCardModule,
    NbInputModule,
    NbCheckboxModule,
    NbPopoverModule,
    NbButtonModule,
    NbProgressBarModule,
    NbSelectModule,
    NbListModule,
    NbAlertModule,
    NbCheckboxModule,
    NbIconModule,
    NbMenuModule,
    ThemeModule,
    NgxChartsModule,
    NbUserModule,
    NgxMaterialTimepickerModule,
    EditorModule,
    NgxPaginationModule
  ]
})
export class SharedModule {
}
