import { TestBed } from '@angular/core/testing';

import { EmitterRouteService } from './emitter-route.service';

describe('EmitterRouteService', () => {
  let service: EmitterRouteService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EmitterRouteService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
