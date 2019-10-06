import {
  put, call, apply, takeLatest,
} from 'redux-saga/dist/redux-saga-effects-npm-proxy.esm';

import { api } from '../../../api/api';

import { actions } from '../actions/actions';

import { asyncTypes } from '../types/asyncTypes';

function* addHobby({ payload: data, userId: id }) {
  const response = yield apply(api, api.addHobby, [data]);
  if (response.status === 201) {
    const responseUserData = yield apply(api, api.getUserData, [id]);
    const body = yield call([responseUserData, 'json']);
    yield put(actions.getDataUserSuccess(body));
  } else {
    yield put(actions.getDataUserFail());
  }
}

export function* watchAddHobby() {
  yield takeLatest(asyncTypes.ADD_HOBBIES_ASYNC, addHobby);
}
