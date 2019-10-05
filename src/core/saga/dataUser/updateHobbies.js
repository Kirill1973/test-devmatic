import {
  put, call, apply, takeLatest,
} from 'redux-saga/effects';

import { api } from '../../api/api';

import { actions } from './actions/actions';

import { asyncTypes } from './types/asyncTypes';

function* updateHobbies({ payload: data, userId: id }) {
  const response = yield apply(api, api.updateHobbies, [data, id]);
  if (response.status === 200) {
    const responseUserData = yield apply(api, api.getUserData, [id]);
    const body = yield call([responseUserData, 'json']);
    yield put(actions.getDataUserSuccess(body));
  } else {
    yield put(actions.getDataUserFail());
  }
}

export function* watchUpdateHobbies() {
  yield takeLatest(asyncTypes.UPDATE_HOBBIES_ASYNC, updateHobbies);
}
