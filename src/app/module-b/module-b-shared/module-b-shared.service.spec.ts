import { TestBed } from '@angular/core/testing';

import { ModuleBSharedService } from './module-b-shared.service';

describe('ModuleBSharedService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ModuleBSharedService = TestBed.get(ModuleBSharedService);
    expect(service).toBeTruthy();
  });
});
