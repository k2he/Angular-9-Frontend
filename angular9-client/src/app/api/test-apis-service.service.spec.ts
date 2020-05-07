import { TestBed, inject } from '@angular/core/testing';

import { TestApisServiceService } from './test-apis-service.service';

describe('TestApisServiceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TestApisServiceService]
    });
  });

  it('should be created', inject([TestApisServiceService], (service: TestApisServiceService) => {
    expect(service).toBeTruthy();
  }));
});
