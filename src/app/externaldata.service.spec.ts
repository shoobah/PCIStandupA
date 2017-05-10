import { TestBed, inject } from '@angular/core/testing';

import { ExternaldataService } from './externaldata.service';

describe('ExternaldataService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ExternaldataService]
    });
  });

  it('should ...', inject([ExternaldataService], (service: ExternaldataService) => {
    expect(service).toBeTruthy();
  }));
});
