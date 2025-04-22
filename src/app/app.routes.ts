import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { ConversionCalculatorComponent } from './pages/conversion-calculator/conversion-calculator.component';
import { AboutComponent } from './pages/about/about.component';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  { path: 'home', component: HomeComponent },
  { path: 'conversion-calculator', component: ConversionCalculatorComponent },
  { path: 'about', component: AboutComponent },
];
