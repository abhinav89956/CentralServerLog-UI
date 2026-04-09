import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MwLogsListComponent } from './mw-logs-list/mw-logs-list.component';

const routes: Routes = [
  { path: '', component: MwLogsListComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MwLogsRoutingModule { }
