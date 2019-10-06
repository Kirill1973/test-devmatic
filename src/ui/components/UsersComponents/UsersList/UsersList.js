import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { asyncActionsUsers } from '../../../../core/saga/dataUsers/actions/asyncActionsUsers';
import { asyncActionsUser } from '../../../../core/saga/dataUser/actions/asyncActionUser';
import Styles from './UsersList.module.scss';

const UsersList = () => {
  const users = useSelector(state => state.usersDataReducer.get('users'));
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(asyncActionsUsers.getDataAsync());
  }, [dispatch]);

  return (
    <div className={Styles.UsersList}>
      {
          users.map(item => (
            <button className={Styles.UsersList__Button} onClick={() => dispatch(asyncActionsUser.getUserAsync(item.id))} key={item.id} type="button">{item.name}</button>
          ))
        }
    </div>
  );
};

export default UsersList;
