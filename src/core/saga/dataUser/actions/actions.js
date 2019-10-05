import { types } from '../types/types';

export const actions = Object.freeze({
  getDataUserSuccess: body => ({
    type: types.GET_DATA_USER_SUCCESS,
    payload: body,
  }),
  getDataUserFail: () => ({
    types: types.GET_DATA_USER_FAIL,
  }),
});
