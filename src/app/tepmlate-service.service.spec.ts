import { TestBed, inject } from '@angular/core/testing';

import { TepmlateServiceService } from './tepmlate-service.service';

describe('TepmlateServiceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TepmlateServiceService]
    });
  });

  it('should be created', inject([TepmlateServiceService], (service: TepmlateServiceService) => {
    expect(service).toBeTruthy();
  }));
});
