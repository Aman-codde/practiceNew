import { Action, createReducer, on } from '@ngrx/store';


export const boardFeatureKey = 'board';

export interface State {
  squares: String[];
  turn: number;
  players: String[];
}

export const initialState: State = {
  squares: Array(9).fill('-'),
  turn: 0 | 1,
  players: ['X','O']
};

export const reducer = createReducer(
  initialState,

);
