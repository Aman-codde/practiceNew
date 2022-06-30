import {
  ActionReducer,
  ActionReducerMap,
  createFeatureSelector,
  createSelector,
  MetaReducer
} from '@ngrx/store';
import { environment } from '../../environments/environment';
import * as fromBoard from './board.reducer';
import * as fromPlayers from './players.reducer';
import * as fromDisney from './disney.reducer';
import * as fromUsers from './users.reducer';


export interface State {

  [fromBoard.boardFeatureKey]: fromBoard.State;
  [fromPlayers.playersFeatureKey]: fromPlayers.State;
  [fromDisney.disneyFeatureKey]: fromDisney.State;
  [fromUsers.usersFeatureKey]: fromUsers.State;
}

export const reducers: ActionReducerMap<State> = {

  [fromBoard.boardFeatureKey]: fromBoard.reducer,
  [fromPlayers.playersFeatureKey]: fromPlayers.reducer,
  [fromDisney.disneyFeatureKey]: fromDisney.reducer,
  [fromUsers.usersFeatureKey]: fromUsers.reducer,
};


export const metaReducers: MetaReducer<State>[] = !environment.production ? [] : [];
