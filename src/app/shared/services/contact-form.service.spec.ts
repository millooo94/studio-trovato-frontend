import { TestBed } from '@angular/core/testing';

import { ContactFormsService } from './contact-forms.service';

describe('ContactFormService', () => {
  let service: ContactFormsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ContactFormsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
