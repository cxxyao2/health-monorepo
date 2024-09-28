import { TestBed } from '@angular/core/testing';

import { SseClientService } from './sse-client.service';

describe('SseClientService', () => {
  let service: SseClientService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SseClientService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
