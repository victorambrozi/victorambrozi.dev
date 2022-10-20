import { TestBed } from '@angular/core/testing';

import { SaveOnLocalStorageService } from './save-on-local-storage.service';

describe('SaveOnLocalStorageService', () => {
  let service: SaveOnLocalStorageService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SaveOnLocalStorageService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
