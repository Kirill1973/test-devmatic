import { Map } from 'immutable';
import { types } from './types/types';

const initialState = Map({
  users: [],
  loading: true,
  error: false,
});

const usersDataReducer = (state = initialState, { payload, type }) => {
  switch (type) {
    case types.GET_DATA_USERS_SUCCESS:
      return state.merge({ users: payload, loading: false, error: false });
    case types.GET_DATA_USERS_FAIL:
      return state.merge({ users: [], loading: false, error: true });
    default:
      return state;
  }
};

export { initialState, usersDataReducer };
