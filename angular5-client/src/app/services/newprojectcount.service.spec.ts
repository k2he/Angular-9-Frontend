import { TestBed, inject } from '@angular/core/testing';

import { ProjectnotifyService } from './projectnotify.service';

describe('ProjectnotifyService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ProjectnotifyService]
    });
  });

  it('should be created', inject([ProjectnotifyService], (service: ProjectnotifyService) => {
    expect(service).toBeTruthy();
  }));
});
