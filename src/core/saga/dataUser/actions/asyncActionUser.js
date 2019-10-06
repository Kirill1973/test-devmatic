import { asyncTypes } from '../types/asyncTypes';

export const asyncActionsUser = Object.freeze({
  getUserAsync: id => ({
    type: asyncTypes.GET_USER_ASYNC,
    payload: id,
  }),
  addHobbiesAsync: (data, id) => ({
    type: asyncTypes.ADD_HOBBIES_ASYNC,
    payload: data,
    userId: id,
  }),
  deleteHobbyAsync: (hobbyId, userId) => ({
    type: asyncTypes.DELETE_HOBBY_ASYNC,
    payload: {
      hobbyId, userId,
    },
  }),
});
