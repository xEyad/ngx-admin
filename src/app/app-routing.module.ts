import { SkipLoginGuard } from './gaurds/skipLoginGuard.guard';
import { CanActivate } from '@angular/router';
import { OnlyLoggedInUsersGuard } from './gaurds/onlyLoggedInUsersGuard.guard';
import { LoginComponent } from './login/login.component';
import { ExtraOptions, RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
export const routes: Routes = [
  {
    path: 'pages',
    loadChildren: () => import('./pages/pages.module')
      .then(m => m.PagesModule),
      canActivate:[OnlyLoggedInUsersGuard]
  },
  {
    path:'login',
    component:LoginComponent,
    // canActivate:[SkipLoginGuard]
  },

  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: '**', redirectTo: 'login' },
];

const config: ExtraOptions = {
  useHash: false,
};

@NgModule({
  imports: [RouterModule.forRoot(routes, config)],
  exports: [RouterModule],
})
export class AppRoutingModule {
}
