import { TestBed } from '@angular/core/testing';

import { PartnerService } from './partners.service';

describe('PartnerService', () => {
  let service: PartnerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PartnerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
