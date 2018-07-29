import { TestBed, inject } from '@angular/core/testing';

import { FavoriteServiceService } from './favorite-service.service';

describe('FavoriteServiceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [FavoriteServiceService]
    });
  });

  it('should be created', inject([FavoriteServiceService], (service: FavoriteServiceService) => {
    expect(service).toBeTruthy();
  }));
});
