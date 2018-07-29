import { TestBed, inject } from '@angular/core/testing';

import { WebServiceService } from './web-service.service';

describe('WebServiceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [WebServiceService]
    });
  });

  it('should be created', inject([WebServiceService], (service: WebServiceService) => {
    expect(service).toBeTruthy();
  }));
});
