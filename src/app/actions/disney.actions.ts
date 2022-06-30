import { createAction, props } from '@ngrx/store';

export const actionloadCharacters = createAction(
  '[Disney] Load Characters'
);

export const actionloadCharactersSuccess = createAction(
  '[Disney] Load Characters Success',
  props<{ data: any }>()
);

export const actionloadCharactersFailure = createAction(
  '[Disney] Load Characters Failure',
  props<{ error: any }>()
);
