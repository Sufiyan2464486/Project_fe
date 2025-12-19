
import { Routes } from "@angular/router";
import { AdminComponent } from './admin.component';
import { DashboardComponent } from './dashboard/dashboard.component';

export const adminRoutes: Routes = [
  {
    path: '',
  component: AdminComponent,
  children: [
    { path: 'dashboard', component: DashboardComponent },
    { path: 'admin', redirectTo: 'dasboard', pathMatch: 'full' },
    
    ]
  }
];
