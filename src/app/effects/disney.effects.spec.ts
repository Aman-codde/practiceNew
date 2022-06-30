import { TestBed } from '@angular/core/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import { Observable } from 'rxjs';

import { DisneyEffects } from './disney.effects';

describe('DisneyEffects', () => {
  let actions$: Observable<any>;
  let effects: DisneyEffects;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        DisneyEffects,
        provideMockActions(() => actions$)
      ]
    });

    effects = TestBed.inject(DisneyEffects);
  });

  it('should be created', () => {
    expect(effects).toBeTruthy();
  });
});
