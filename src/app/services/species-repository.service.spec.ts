import { TestBed } from '@angular/core/testing';

import { SpeciesRepositoryService } from './species-repository.service';
import { HttpClientModule } from '@angular/common/http';

describe('SpeciesRepositoryService', () => {
  beforeEach(() =>
    TestBed.configureTestingModule({ imports: [HttpClientModule] })
  );

  it('should be created', () => {
    const service: SpeciesRepositoryService = TestBed.get(
      SpeciesRepositoryService
    );
    expect(service).toBeTruthy();
  });
});
