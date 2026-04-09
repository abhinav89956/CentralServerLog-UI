import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-mw-logs-table',
  templateUrl: './mw-logs-table.component.html',
  styleUrls: ['./mw-logs-table.component.scss']
})
export class MwLogsTableComponent {
  @Input() logs: any[] = [];
  @Input() loading: boolean = false;
  @Input() pageNumber: number = 1;
  @Input() pageSize: number = 50;

  @Output() pageChange = new EventEmitter<number>();

  isDialogOpen = false;
  selectedLog: any = null;

  openDialog(log: any) {
    this.selectedLog = log;
    this.isDialogOpen = true;
  }

  closeDialog() {
    this.isDialogOpen = false;
    this.selectedLog = null;
  }

  getEventBadgeClass(event: string | undefined): string {
    if (!event) return 'badge-success';
    const e = event.toLowerCase();
    if (e === 'error') return 'badge-error';
    if (e.includes('sync')) return 'badge-info';
    return 'badge-success';
  }

  onPrev() {
    if (this.pageNumber > 1) {
      this.pageChange.emit(this.pageNumber - 1);
    }
  }

  onNext() {
    // If logs length equals pageSize, assume there might be more
    if (this.logs.length === this.pageSize) {
      this.pageChange.emit(this.pageNumber + 1);
    }
  }
}
