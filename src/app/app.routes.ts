import { Routes } from '@angular/router';

export const routes: Routes = [
  { path: '', redirectTo: 'mw-logs', pathMatch: 'full' },
  { path: 'mw-logs', loadChildren: () => import('./features/mw-logs/mw-logs.module').then(m => m.MwLogsModule) }
];
