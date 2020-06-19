import { NgModule } from '@angular/core';
import { NbMenuModule, NbCardModule, NbInputModule, NbLayoutModule, NbButtonModule } from '@nebular/theme';

import { ThemeModule } from '../@theme/theme.module';
import { PagesComponent } from './pages.component';
import { DashboardModule } from './dashboard/dashboard.module';
import { PagesRoutingModule } from './pages-routing.module';
import { UploadStatsticsComponent } from './upload-statstics/upload-statstics.component';
import { UploadFinancesComponent } from './upload-finances/upload-finances.component';
import { AddTimeComponent } from './add-time/add-time.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  imports: [
    PagesRoutingModule,
    ThemeModule,
    NbMenuModule,
    DashboardModule,
    NbCardModule,
    NbInputModule,
    NbLayoutModule,
    FormsModule,
    NbButtonModule

  ],
  declarations: [
    PagesComponent,
    UploadStatsticsComponent,
    UploadFinancesComponent,
    AddTimeComponent,
  ],
})
export class PagesModule {
}
