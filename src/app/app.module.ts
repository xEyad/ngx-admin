import { SkipLoginGuard } from './gaurds/skipLoginGuard.guard';
import { SharedModule } from './shared.module';
import { LoginComponent } from './login/login.component';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { CoreModule } from './@core/core.module';
import { ThemeModule } from './@theme/theme.module';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import {
  NbChatModule,
  NbDatepickerModule,
  NbDialogModule,
  NbMenuModule,
  NbSidebarModule,
  NbToastrModule,
  NbWindowModule,
} from '@nebular/theme';
import {OnlyLoggedInUsersGuard}from'./gaurds/onlyLoggedInUsersGuard.guard';
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent
  ],
  providers: [
    OnlyLoggedInUsersGuard,
    SkipLoginGuard
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    AppRoutingModule,
    ThemeModule.forRoot(),
    NbDialogModule.forRoot({
      autoFocus:true,
      closeOnBackdropClick:true,
      closeOnEsc:true,
      hasBackdrop:true,
      hasScroll:true,
    }),
    NbSidebarModule.forRoot(),
    NbMenuModule.forRoot(),
    NbDatepickerModule.forRoot(),
    NbDialogModule.forRoot(),
    NbWindowModule.forRoot(),
    NbToastrModule.forRoot(),
    NbChatModule.forRoot({
      messageGoogleMapKey: 'AIzaSyA_wNuCzia92MAmdLRzmqitRGvCF7wCZPY',
    }),
    CoreModule.forRoot(),
    NbToastrModule.forRoot(),
    SharedModule
  ],
  bootstrap: [AppComponent],
})
export class AppModule {
}
