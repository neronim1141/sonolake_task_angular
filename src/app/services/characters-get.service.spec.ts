import { TestBed } from '@angular/core/testing';

import { CharactersGetService } from './characters-get.service';

describe('CharactersGetService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CharactersGetService = TestBed.get(CharactersGetService);
    expect(service).toBeTruthy();
  });
});
