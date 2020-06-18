import { ThemeModule } from './../@theme/theme.module';
import { CommonModule } from '@angular/common';
import { AuthRoutingModule } from './auth-routing.module';
import { LoginComponent } from './login/login.component';
import { NgModule } from '@angular/core';
import { NbInputModule, NbAlertModule, NbCheckboxModule, NbIconModule, NbCardModule } from '@nebular/theme';
import { FormsModule } from '@angular/forms';
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
  ],
  declarations: [
    LoginComponent
  ],
})
export class AuthModule { }
