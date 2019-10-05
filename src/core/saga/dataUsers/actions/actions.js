import { types } from '../types/types';

export const actions = Object.freeze({
  getDataUsersSuccess: body => ({
    type: types.GET_DATA_USERS_SUCCESS,
    payload: body,
  }),
  getDataUsersFail: () => ({
    types: types.GET_DATA_USERS_FAIL,
  }),
});
