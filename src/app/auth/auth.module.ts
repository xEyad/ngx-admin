import { ThemeModule } from './../@theme/theme.module';
import { CommonModule } from '@angular/common';
import { AuthRoutingModule } from './auth-routing.module';
import { LoginComponent } from './login/login.component';
import { NgModule } from '@angular/core';
import { NbInputModule, NbAlertModule, NbCheckboxModule, NbIconModule, NbCardModule, NbLayoutModule, NbButtonModule } from '@nebular/theme';
import { FormsModule } from '@angular/forms';
import { RegisterComponent } from './register/register.component';
import { RequestPasswordComponent } from './request-password/request-password.component';
import { ResetPasswordComponent } from './reset-password/reset-password.component';
@NgModule({
  imports: [
    AuthRoutingModule,
    NbInputModule,
    NbAlertModule,
    FormsModule,
    CommonModule,
    NbCheckboxModule,
    NbIconModule,
    NbCardModule,
    ThemeModule,
    NbLayoutModule,
    NbButtonModule,
  ],
  declarations: [
    LoginComponent,
    RegisterComponent,
    RequestPasswordComponent,
    ResetPasswordComponent
  ],
})
export class AuthModule { }
