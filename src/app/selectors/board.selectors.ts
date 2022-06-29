import { createFeatureSelector, createSelector } from '@ngrx/store';

import * as fromBoard from '../reducers/board.reducer';

const getBoardFeatureState = createFeatureSelector<fromBoard.State>('board');