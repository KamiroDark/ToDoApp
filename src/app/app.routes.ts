import { Routes } from '@angular/router';
import {Home} from './pages/home/home';
import {Lab} from './pages/lab/lab';


export const routes: Routes = [
  {
    path: '',
    component: Home
  },
  {
    path: 'lab',
    component: Lab
  }
];

