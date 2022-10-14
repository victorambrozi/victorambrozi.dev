import { TestBed } from '@angular/core/testing';

import { PegarIdService } from './pegar-id.service';

describe('PegarIdService', () => {
  let service: PegarIdService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PegarIdService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
