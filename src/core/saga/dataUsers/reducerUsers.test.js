import { Map } from 'immutable';
import { types } from './types/types';
import { initialState, usersDataReducer } from './reducer';

describe('REDUCER', () => {
  it('should return the initial state', () => expect(usersDataReducer(initialState, {})).toEqual(initialState));
  it('should handle "GET_DATA_USERS_SUCCESS" action', () => {
    const mockData = [{
      id: 1,
      name: 'Jack',
      hobbies: [{
        userId: 1,
        id: 1,
        level: 'medium',
        body: 'football',
        yearStart: 2018,
      }],
    }];
    expect(usersDataReducer(initialState, { type: types.GET_DATA_USERS_SUCCESS, payload: mockData }))
      .toEqual(Map({ users: mockData, loading: false, error: false }));
  });
  it('should handle "GET_DATA_USERS_FAIL" action', () => {
    expect(usersDataReducer(initialState, { type: types.GET_DATA_USERS_FAIL }))
      .toEqual(Map({ users: [], loading: false, error: true }));
  });
});
