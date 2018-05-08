import { TestBed, inject } from '@angular/core/testing';

import { WggService } from './wgg.service';

describe('WggService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [WggService]
    });
  });

  it('should be created', inject([WggService], (service: WggService) => {
    expect(service).toBeTruthy();
  }));
});
