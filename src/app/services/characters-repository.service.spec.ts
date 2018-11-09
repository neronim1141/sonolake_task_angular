import { TestBed } from '@angular/core/testing';

import { CharactersRepositoryService } from './characters-repository.service';
import { HttpClientModule } from '@angular/common/http';

describe('CharactersRepositoryService', () => {
  beforeEach(() =>
    TestBed.configureTestingModule({ imports: [HttpClientModule] })
  );

  it('should be created', () => {
    const service: CharactersRepositoryService = TestBed.get(
      CharactersRepositoryService
    );
    expect(service).toBeTruthy();
  });
});
