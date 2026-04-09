import { Component, EventEmitter, Input, Output, OnInit } from '@angular/core';

@Component({
  selector: 'app-log-details-dialog',
  templateUrl: './log-details-dialog.component.html',
  styleUrls: ['./log-details-dialog.component.scss']
})
export class LogDetailsDialogComponent implements OnInit {
  @Input() log: any;
  @Output() close = new EventEmitter<void>();

  parsedProperties: any = null;

  ngOnInit() {
    if (this.log && this.log.properties) {
      try {
        this.parsedProperties = JSON.parse(this.log.properties);
      } catch (e) {
        console.warn('Failed to parse properties JSON', e);
        this.parsedProperties = null;
      }
    }
  }

  onClose() {
    this.close.emit();
  }

  getEventBadgeClass(event: string | undefined): string {
    if (!event) return 'badge-success';
    const e = event.toLowerCase();
    if (e === 'error') return 'badge-error';
    if (e.includes('sync')) return 'badge-info';
    return 'badge-success';
  }

  isObject(val: any): boolean {
    return val !== null && typeof val === 'object';
  }
}
