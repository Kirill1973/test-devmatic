import {
  put, apply, call, takeLatest,
} from 'redux-saga/dist/redux-saga-effects-npm-proxy.esm';
import { api } from '../../../api/api';

import { actions } from '../actions/actions';
import { asyncTypes } from '../types/asyncTypes';

function* getUserData({ payload: id }) {
  const response = yield apply(api, api.getUserData, [id]);
  const body = yield call([response, 'json']);
  if (response.status === 200) {
    yield put(actions.getDataUserSuccess(body));
  } else {
    yield put(actions.getDataUserFail());
  }
}

export function* watchUserData() {
  yield takeLatest(asyncTypes.GET_USER_ASYNC, getUserData);
}
