import { TestBed } from '@angular/core/testing';

import { TaraDataService } from './tara-data.service';

describe('TaraDataService', () => {
  let service: TaraDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TaraDataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
