import { TestBed } from '@angular/core/testing';

import { RetosService } from './retos.service';

describe('RetosService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: RetosService = TestBed.get(RetosService);
    expect(service).toBeTruthy();
  });
});
