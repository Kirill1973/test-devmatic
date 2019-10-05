import React from 'react';
import AddUserPanel from '../AddUserPanel/AddUserPanel';
import UsersList from '../UsersList/UsersList';
import Styles from './Users.module.scss';

const Users = () => (
  <div className={Styles.Users}>
    <AddUserPanel />
    <UsersList />
  </div>
);

export default Users;
