import { Action, createReducer, on } from '@ngrx/store';


export const playersFeatureKey = 'players';

export interface State {
  players: String[];
  turn: 0 | 1;
}

export const initialState: State = {
  players: ['O','X'],
  turn: 0
};

export const reducer = createReducer(
  initialState,

);
