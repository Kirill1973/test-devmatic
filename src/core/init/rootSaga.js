import { all, call } from 'redux-saga/effects';

import { watchUsersData } from '../saga/dataUsers/sagas/getDataUsers';
import { watchAddNewUser } from '../saga/dataUsers/sagas/addNewUser';
import { watchUserData } from '../saga/dataUser/sagas/getUserData';
import { watchUpdateHobbies } from '../saga/dataUser/sagas/updateHobbies';

export function* rootSaga(dispatch, getState) {
  yield all([
    call(watchUsersData, getState),
    call(watchAddNewUser, getState),
    call(watchUserData, getState),
    call(watchUpdateHobbies, getState),
  ]);
}
