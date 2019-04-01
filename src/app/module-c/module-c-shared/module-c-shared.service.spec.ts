import { TestBed } from '@angular/core/testing';

import { ModuleCSharedService } from './module-c-shared.service';

describe('ModuleCSharedService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ModuleCSharedService = TestBed.get(ModuleCSharedService);
    expect(service).toBeTruthy();
  });
});
