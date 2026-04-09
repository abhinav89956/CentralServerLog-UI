import { Component, OnInit } from '@angular/core';
import { ActivitylogserviceService, LogItem } from '../../../service/activitylogservice.service';

@Component({
  selector: 'app-mw-logs-list',
  templateUrl: './mw-logs-list.component.html',
  styleUrls: ['./mw-logs-list.component.scss']
})
export class MwLogsListComponent implements OnInit {
  logs: LogItem[] = [];
  loading: boolean = false;
  error: string | null = null;

  // Pagination state
  pageNumber: number = 1;
  pageSize: number = 50;

  // Filter state
  currentFilters: any = {};

  constructor(private logsService: ActivitylogserviceService) {}

  ngOnInit(): void {
    this.fetchLogs();
  }

  fetchLogs() {
    this.loading = true;
    this.error = null;

    const { search, fromDate, toDate } = this.currentFilters;

    this.logsService.getLogs(this.pageNumber, this.pageSize, search, fromDate, toDate).subscribe({
      next: (res) => {debugger
        if (res.success) {
          this.logs = res.data || [];
        } else {
          this.error = res.message || 'Failed to fetch logs';
          this.logs = [];
        }
        this.loading = false;
      },
      error: (err) => {
        this.error = 'Error connecting to the server. ' + (err.message || '');
        this.loading = false;
      }
    });
  }

  onFilterChanged(filters: any) {
    this.currentFilters = filters;
    this.pageNumber = 1; // Reset to first page on new filter
    this.fetchLogs();
  }

  onPageChanged(newPage: number) {
    this.pageNumber = newPage;
    this.fetchLogs();
  }
}
