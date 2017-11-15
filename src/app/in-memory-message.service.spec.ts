import { TestBed, inject } from '@angular/core/testing';

import { InMemoryMessageService } from './in-memory-message.service';

describe('InMemoryMessageService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [InMemoryMessageService]
    });
  });

  it('should be created', inject([InMemoryMessageService], (service: InMemoryMessageService) => {
    expect(service).toBeTruthy();
  }));
});
