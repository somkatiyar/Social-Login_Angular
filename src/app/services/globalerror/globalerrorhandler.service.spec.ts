import { TestBed } from '@angular/core/testing';

import { GlobalerrorhandlerService } from './globalerrorhandler.service';

describe('GlobalerrorhandlerService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: GlobalerrorhandlerService = TestBed.get(GlobalerrorhandlerService);
    expect(service).toBeTruthy();
  });
});
