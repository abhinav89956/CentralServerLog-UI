import { Component, EventEmitter, Output } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-mw-logs-filter',
  templateUrl: './mw-logs-filter.component.html',
  styleUrls: ['./mw-logs-filter.component.scss']
})
export class MwLogsFilterComponent {
  filterForm: FormGroup;
  @Output() filterChanged = new EventEmitter<any>();

  constructor(private fb: FormBuilder) {
    this.filterForm = this.fb.group({
      search: [''],
      fromDate: [''],
      toDate: ['']
    });
  }

  onSubmit() {
    this.filterChanged.emit(this.filterForm.value);
  }

  onReset() {
    this.filterForm.reset();
    this.filterChanged.emit(this.filterForm.value);
  }
}
