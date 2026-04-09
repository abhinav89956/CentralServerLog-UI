import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { MwLogsRoutingModule } from './mw-logs-routing.module';

import { MwLogsListComponent } from './mw-logs-list/mw-logs-list.component';
import { MwLogsFilterComponent } from './components/mw-logs-filter/mw-logs-filter.component';
import { MwLogsTableComponent } from './components/mw-logs-table/mw-logs-table.component';
import { LogDetailsDialogComponent } from './components/log-details-dialog/log-details-dialog.component';

@NgModule({
  declarations: [
    MwLogsListComponent,
    MwLogsFilterComponent,
    MwLogsTableComponent,
    LogDetailsDialogComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MwLogsRoutingModule
  ]
})
export class MwLogsModule { }
