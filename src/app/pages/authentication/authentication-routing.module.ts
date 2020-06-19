import { RegisterComponent } from './register/register.component';
import { UpdateUserPasswordComponent } from './update-user-password/update-user-password.component';
import { ResetPasswordComponent } from './reset-password/reset-password.component';
import { LoginComponent } from './login/login.component';
import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';

const routes: Routes = [{
  path: '',
  component: LoginComponent,
  children: [
    {
      path: 'login',
      component: LoginComponent,
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
      path: '',
      redirectTo: 'login',
      pathMatch: 'full',
    },
  ],
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AuthenticationRoutingModule {
}
