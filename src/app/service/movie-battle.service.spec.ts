import { TestBed } from '@angular/core/testing';

import { MovieBattleService } from './movie-battle.service';

describe('MovieBattleService', () => {
  let service: MovieBattleService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MovieBattleService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
