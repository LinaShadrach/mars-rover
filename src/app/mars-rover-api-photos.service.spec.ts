import { TestBed, inject } from '@angular/core/testing';

import { MarsRoverAPIPhotosService } from './mars-rover-api-photos.service';

describe('MarsRoverAPIPhotosService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MarsRoverAPIPhotosService]
    });
  });

  it('should ...', inject([MarsRoverAPIPhotosService], (service: MarsRoverAPIPhotosService) => {
    expect(service).toBeTruthy();
  }));
});
