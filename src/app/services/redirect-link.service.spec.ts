import { TestBed } from '@angular/core/testing';

import { RedirectLinkService } from './redirect-link.service';

describe('RedirectLinkService', () => {
  let service: RedirectLinkService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RedirectLinkService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
