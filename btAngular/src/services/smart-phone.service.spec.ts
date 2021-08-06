import { TestBed } from '@angular/core/testing';

import { SmartPhoneService } from './smart-phone.service';

describe('SmartPhoneService', () => {
  let service: SmartPhoneService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SmartPhoneService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
