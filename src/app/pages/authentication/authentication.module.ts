import { AuthenticationRoutingModule } from './authentication-routing.module';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { NgModule } from '@angular/core';
import { NbInputModule, NbAlertModule, NbCheckboxModule, NbIconModule, NbCardModule, NbLayoutModule, NbButtonModule } from '@nebular/theme';
import { FormsModule } from '@angular/forms';
import { RegisterComponent } from './register/register.component';
import { RequestPasswordComponent } from './request-password/request-password.component';
import { ResetPasswordComponent } from './reset-password/reset-password.component';
@NgModule({
  imports: [
    AuthenticationRoutingModule,
    NbInputModule,
    NbAlertModule,
    FormsModule,
    CommonModule,
    NbCheckboxModule,
    NbIconModule,
    NbCardModule,
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
export class AuthenticationModule { }
