import { asyncTypes } from '../types/asyncTypes';

export const asyncActionsUsers = Object.freeze({
  getDataAsync: () => ({
    type: asyncTypes.GET_USERS_ASYNC,
  }),
  addUserAsync: data => ({
    type: asyncTypes.ADD_USER_ASYNC,
    payload: data,
  }),
});
