import { AuthenticationRoutingModule } from './authentication-routing.module';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { NgModule } from '@angular/core';
import { NbInputModule, NbAlertModule, NbCheckboxModule, NbIconModule, NbCardModule, NbLayoutModule, NbButtonModule, NbSelectModule } from '@nebular/theme';
import { FormsModule } from '@angular/forms';
import { RegisterComponent } from './register/register.component';
import { ResetPasswordComponent } from './reset-password/reset-password.component';
import { UpdateUserPasswordComponent } from './update-user-password/update-user-password.component';
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
    NbSelectModule
  ],
  declarations: [
    LoginComponent,
    RegisterComponent,
    ResetPasswordComponent,
    UpdateUserPasswordComponent
  ],
})
export class AuthenticationModule { }
