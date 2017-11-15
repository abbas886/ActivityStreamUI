import { TestBed, inject } from '@angular/core/testing';

import { InMemoryCircleService } from './in-memory-circle.service';

describe('InMemoryCircleService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [InMemoryCircleService]
    });
  });

  it('should be created', inject([InMemoryCircleService], (service: InMemoryCircleService) => {
    expect(service).toBeTruthy();
  }));
});
