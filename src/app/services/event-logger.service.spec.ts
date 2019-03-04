import { TestBed } from '@angular/core/testing';

import { EventLoggerService } from './event-logger.service';

describe('EventLoggerService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: EventLoggerService = TestBed.get(EventLoggerService);
    expect(service).toBeTruthy();
  });
});
