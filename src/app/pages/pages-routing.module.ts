import { UploadFinancesComponent } from './upload-finances/upload-finances.component';
import { UploadStatsticsComponent } from './upload-statstics/upload-statstics.component';
import { AddTimeComponent } from './add-time/add-time.component';
import { RegisterComponent } from './register/register.component';
import { UpdateUserPasswordComponent } from './update-user-password/update-user-password.component';
import { ResetPasswordComponent } from './reset-password/reset-password.component';
import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';

import { PagesComponent } from './pages.component';
import { DashboardComponent } from './dashboard/dashboard.component';

const routes: Routes = [{
  path: '',
  component: PagesComponent,
  children: [
    {
      path: 'dashboard',
      component: DashboardComponent,
    },
    {
      path:"addTime",
      component:AddTimeComponent
    },
    {
      path: 'reset',
      component: ResetPasswordComponent,
    },
    {
      path:"update",
      component:UpdateUserPasswordComponent
    },
    {
      path:"register",
      component:RegisterComponent
    },
    {
      path:"uploadStatstics",
      component:UploadStatsticsComponent
    },
    {
      path:"uploadFinances",
      component:UploadFinancesComponent
    },
    {
      path: '',
      redirectTo: 'dashboard',
      pathMatch: 'full',
    },
  ],
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PagesRoutingModule {
}
