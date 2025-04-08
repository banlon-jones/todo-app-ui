import { Routes } from '@angular/router';
import {SignInComponent} from './pages/sign-in/sign-in.component';
import {NotFoundComponent} from './pages/not-found/not-found.component';

export const routes: Routes = [
  {path: '', component: SignInComponent},
  {path: 'sign-up', component: SignInComponent},
  {path: '**', component: NotFoundComponent},
];
