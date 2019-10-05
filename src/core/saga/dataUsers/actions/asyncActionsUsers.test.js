import { asyncActionsUsers } from './asyncActionsUsers';
import { asyncTypes } from '../types/asyncTypes';

describe('ACTIONS', () => {
  it('should create an action with correct type', () => {
    const expectedAction = {
      type: asyncTypes.GET_USERS_ASYNC,
    };
    expect(asyncActionsUsers.getDataAsync()).toEqual(expectedAction);
  });
});
