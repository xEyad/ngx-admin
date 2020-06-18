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
export class AuthRoutingModule {
}
