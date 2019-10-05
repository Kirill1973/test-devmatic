import { all, call } from 'redux-saga/effects';

import { watchUsersData } from '../saga/dataUsers/getDataUsers';
import { watchAddNewUser } from '../saga/dataUsers/addNewUser';
import { watchUserData } from '../saga/dataUser/getUserData';
import { watchUpdateHobbies } from '../saga/dataUser/updateHobbies';

export function* rootSaga(dispatch, getState) {
  yield all([
    call(watchUsersData, getState),
    call(watchAddNewUser, getState),
    call(watchUserData, getState),
    call(watchUpdateHobbies, getState),
  ]);
}
