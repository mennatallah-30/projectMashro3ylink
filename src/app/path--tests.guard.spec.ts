import { TestBed } from '@angular/core/testing';

import { PathTestsGuard } from './path--tests.guard';

describe('PathTestsGuard', () => {
  let guard: PathTestsGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(PathTestsGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
