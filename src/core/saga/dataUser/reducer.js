import { Map } from 'immutable';

import { types } from './types/types';

const initialState = Map({
  user: {},
  loading: true,
  error: false,
});

export const userDataReducer = (state = initialState, { payload, type }) => {
  switch (type) {
    case types.GET_DATA_USER_SUCCESS:
      return state.merge({ user: payload, loading: false, error: false });
    case types.GET_DATA_USER_FAIL:
      return state.merge({ user: {}, loading: false, error: true });
    default:
      return state;
  }
};
