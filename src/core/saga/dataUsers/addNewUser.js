import { put, apply, call, takeLatest } from 'redux-saga/effects';
import { api } from '../../api/api';
import { actions } from './actions/actions';
import { asyncTypes } from './types/asyncTypes';

function* addNewUser({ payload }) {
  const response = yield apply(api, api.addNewUser, [payload]);
  if (response.status === 201) {
    const responseUserData = yield apply(api, api.getUsersData);
    const body = yield call([responseUserData, 'json']);
    yield put(actions.getDataUsersSuccess(body));
  } else {
    yield put(actions.getDataUsersFail());
  }
}

export function* watchAddNewUser() {
  yield takeLatest(asyncTypes.ADD_USER_ASYNC, addNewUser);
}
