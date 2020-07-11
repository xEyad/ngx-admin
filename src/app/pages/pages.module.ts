import { NoHomeGuard } from './../gaurds/no-home.guard';
import { ResetPasswordComponent } from './reset-password/reset-password.component';
import { UpdateUserPasswordComponent } from './update-user-password/update-user-password.component';
import { RegisterComponent } from './register/register.component';
import { CommonModule } from '@angular/common';
import { SharedModule } from './../shared.module';
import { NgModule } from '@angular/core';

import { PagesComponent } from './pages.component';
import { PagesRoutingModule } from './pages-routing.module';
import { UploadStatsticsComponent } from './upload-statstics/upload-statstics.component';
import { UploadFinancesComponent } from './upload-finances/upload-finances.component';
import { AddTimeComponent } from './add-time/add-time.component';
import { AddNewsComponent } from './add-news/add-news.component';
import { NewsViewerComponent } from './news-viewer/news-viewer.component';

@NgModule({
  imports: [
    CommonModule,
    PagesRoutingModule,
    SharedModule,
  ],
  providers:[
    NoHomeGuard
  ],
  declarations: [
    PagesComponent,
    UploadStatsticsComponent,
    UploadFinancesComponent,
    AddTimeComponent,
    RegisterComponent,
    UpdateUserPasswordComponent,
    ResetPasswordComponent,
    AddNewsComponent,
  ],
})
export class PagesModule {
}
