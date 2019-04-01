import { TestBed } from '@angular/core/testing';

import { ModuleASharedService } from './module-a-shared.service';

describe('ModuleASharedService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ModuleASharedService = TestBed.get(ModuleASharedService);
    expect(service).toBeTruthy();
  });
});
