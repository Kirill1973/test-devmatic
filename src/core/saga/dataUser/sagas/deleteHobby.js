import {
  put, apply, call, takeLatest,
} from 'redux-saga/effects';

import { api } from '../../../api/api';

import { actions } from '../actions/actions';

import { asyncTypes } from '../types/asyncTypes';

function* deleteHobby({ payload: { hobbyId, userId } }) {
  const response = yield apply(api, api.deleteHobby, [hobbyId]);
  if (response.status === 200) {
    const responseUserData = yield apply(api, api.getUserData, [userId]);
    const body = yield call([responseUserData, 'json']);
    yield put(actions.getDataUserSuccess(body));
  } else {
    yield put(actions.getDataUserFail());
  }
}

export function* watchDeleteHobby() {
  yield takeLatest(asyncTypes.DELETE_HOBBY_ASYNC, deleteHobby);
}
