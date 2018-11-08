import { TestBed } from '@angular/core/testing';

import { CharactersGetService } from './characters-get.service';
import { HttpClientModule } from '@angular/common/http';

describe('CharactersGetService', () => {
  beforeEach(() =>
    TestBed.configureTestingModule({ imports: [HttpClientModule] }));

  it('should be created', () => {
    const service: CharactersGetService = TestBed.get(CharactersGetService);
    expect(service).toBeTruthy();
  });
});
