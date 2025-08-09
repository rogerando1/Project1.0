import { Routes, } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { ForgotPasswordComponent } from '../../dist/gsone-v2/browser/src/app/components/forgot-password/forgot-password.component';
import path from 'path';

export const routes: Routes = [
  { path: '', component: LoginComponent},
  { path: 'RequestReset', component: ForgotPasswordComponent}
];
