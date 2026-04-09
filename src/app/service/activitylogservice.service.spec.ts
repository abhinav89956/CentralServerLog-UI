import { TestBed } from '@angular/core/testing';

import { ActivitylogserviceService } from './activitylogservice.service';

describe('ActivitylogserviceService', () => {
  let service: ActivitylogserviceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ActivitylogserviceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
