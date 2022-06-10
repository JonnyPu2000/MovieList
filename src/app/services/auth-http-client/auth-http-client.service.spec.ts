import { TestBed } from '@angular/core/testing';

import { AuthHttpClientService } from './auth-http-client.service';

describe('AuthHttpClientService', () => {
  let service: AuthHttpClientService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AuthHttpClientService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
