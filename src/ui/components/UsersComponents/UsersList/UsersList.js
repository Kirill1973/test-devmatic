import React, { Component } from 'react';
import { connect } from 'react-redux';
import { asyncActionsUsers } from '../../../../core/saga/dataUsers/actions/asyncActionsUsers';
import { asyncActionsUser } from '../../../../core/saga/dataUser/actions/asyncActionUser';
import Styles from './UsersList.module.scss';

class UsersList extends Component {
  componentDidMount() {
    const { getDataAsync } = this.props;
    getDataAsync();
  }

  render() {
    const { users, getUserData } = this.props;
    return (
      <div className={Styles.UsersList}>
        {
          users.map(item => (
            <button className={Styles.UsersList__Button} onClick={() => getUserData(item.id)} key={item.id} type="button">{item.name}</button>
          ))
        }
      </div>
    );
  }
}

const mapStateToProps = state => ({
  users: state.usersDataReducer.get('users'),
});

const mapDispatchToProps = {
  getDataAsync: asyncActionsUsers.getDataAsync,
  getUserData: asyncActionsUser.getUserAsync,
};

export default connect(mapStateToProps, mapDispatchToProps)(UsersList);
