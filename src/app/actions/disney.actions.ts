import { createAction, props } from '@ngrx/store';

export const loadDisneys = createAction(
  '[Disney] Load Disneys'
);

export const loadDisneysSuccess = createAction(
  '[Disney] Load Disneys Success',
  props<{ data: any }>()
);

export const loadDisneysFailure = createAction(
  '[Disney] Load Disneys Failure',
  props<{ error: any }>()
);
