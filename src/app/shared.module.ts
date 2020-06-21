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
  NbDialogModule,
  NbListModule,
  NbAlertModule,
  NbMenuModule,
  NbPopoverModule
} from '@nebular/theme';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
  ],
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
    NbDialogModule.forChild(),
    NbListModule,
    NbAlertModule,
    NbCheckboxModule,
    NbPopoverModule,
    NbIconModule,
    NbMenuModule,
    ThemeModule,
    NgxChartsModule,
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
    NbDialogModule,
    NbListModule,
    NbAlertModule,
    NbCheckboxModule,
    NbIconModule,
    NbMenuModule,
    ThemeModule,
    NgxChartsModule,
  ]
})
export class SharedModule {
}
