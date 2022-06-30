import { createFeatureSelector, createSelector } from '@ngrx/store';

import * as fromPlayers from '../reducers/players.reducer';

const selectPlayersFeatureState = createFeatureSelector<fromPlayers.State>('players');

export const selectPlayers = createSelector(
    selectPlayersFeatureState, 
    state => state.players
);

export const selectTurn = createSelector(
    selectPlayersFeatureState,
    state => state.turn
);

