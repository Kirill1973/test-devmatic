import { put, takeLatest } from 'redux-saga/dist/redux-saga-effects-npm-proxy.esm';
import { getUsersData, watchUsersData } from './getDataUsers';
import { asyncTypes } from '../types/asyncTypes';
import { types } from '../types/types';

describe('SAGAS', () => {
  it('should dispatch action "GET_USERS_ASYNC" ', () => {
    const generator = watchUsersData();
    expect(generator.next().value)
      .toEqual(takeLatest(asyncTypes.GET_USERS_ASYNC, getUsersData));
    expect(generator.next().done).toBeTruthy();
  });
  it('should dispatch action "GET_DATA_USERS_SUCCESS" with result from fetch API', () => {
    const mockData = JSON.stringify([{
      id: 1,
      name: 'Jack',
      hobbies: [{
        userId: 1,
        id: 1,
        level: 'medium',
        body: 'football',
        yearStart: 2018,
      }],
    }]);
    const generator = getUsersData();
    generator.next();
    expect(generator.next(mockData).value)
      .toEqual(put({ type: types.GET_DATA_USERS_SUCCESS, payload: mockData }));
    expect(generator.next().done).toBeTruthy();
  });
});
