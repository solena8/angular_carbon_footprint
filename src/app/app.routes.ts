import { Routes } from '@angular/router';
import {HomeComponent} from './home/home.component';
import {SummaryComponent} from './summary/summary.component';
import {ProfileComponent} from './profile/profile.component';
import {userGuard} from './guards/user.guard';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'summary', component: SummaryComponent , canActivate: [userGuard]},
  { path: 'profile/:username', component: ProfileComponent , canActivate: [userGuard]},
];
