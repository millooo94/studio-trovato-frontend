import { Routes } from '@angular/router';
import { HomeComponent } from './website/pages/home/home.component';
import { authGuard } from './shared/auth/guards/auth.guard';

export const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'home',
  },
  {
    path: 'home',
    component: HomeComponent,
  },
  {
    path: 'login',
    loadComponent: () =>
      import('./shared/auth/pages/login/login.component').then(
        (m) => m.LoginComponent
      ),
  },
  {
    path: 'partner-detail/:id',
    loadComponent: () =>
      import('./website/pages/partner-detail/partner-detail.component').then(
        (m) => m.PartnerDetailComponent
      ),
  },
  {
    path: 'practice-area-detail/:id',
    loadComponent: () =>
      import(
        './website/pages/practice-area-detail/practice-area-detail.component'
      ).then((m) => m.PracticeAreaDetailComponent),
  },
  {
    path: 'admin',
    loadComponent: () =>
      import('./admin/pages/dashboard/dashboard.component').then(
        (m) => m.DashboardComponent
      ),
    canActivate: [authGuard],
  },
];
