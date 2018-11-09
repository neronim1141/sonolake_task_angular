import { TestBed } from '@angular/core/testing';

import { SpeciesRepositoryService } from './species-repository.service';

describe('SpeciesRepositoryService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SpeciesRepositoryService = TestBed.get(SpeciesRepositoryService);
    expect(service).toBeTruthy();
  });
});
