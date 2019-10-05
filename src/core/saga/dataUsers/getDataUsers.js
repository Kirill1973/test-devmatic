import {
  put, apply, call, takeLatest,
} from 'redux-saga/effects';
import { asyncTypes } from './types/asyncTypes';
import { api } from '../../api/api';
import { actions } from './actions/actions';

export function* getUsersData() {
  const response = yield apply(api, api.getUsersData);
  const body = yield call([response, 'json']);
  if (response.status === 200) {
    yield put(actions.getDataUsersSuccess(body));
  } else {
    yield put(actions.getDataUsersFail());
  }
}

export function* watchUsersData() {
  yield takeLatest(asyncTypes.GET_USERS_ASYNC, getUsersData);
}
