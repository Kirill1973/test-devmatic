import React, { Component } from 'react';
import { connect } from 'react-redux';
import { asyncActionsUser } from '../../../../core/saga/dataUser/actions/asyncActionUser';
import HobbiesList from '../HobbiesList/HobbiesList';
import Styles from './RenderHobbiesList.module.scss';

class RenderHobbiesList extends Component {
  onDeleteHobby = (id) => {
    const { item, deleteHobby } = this.props;
    deleteHobby(id, item.id);
  };

  render() {
    const { item } = this.props;
    return (
      <div>
        {
          Object.keys(item).length > 0 ? <HobbiesList deleteHobby={this.onDeleteHobby} item={item} /> : <p className={Styles.RenderHobbiesList__Warning}>Select the user, please!!!</p>
        }
      </div>
    );
  }
}

const mapStateToProps = state => ({
  item: state.userDataReducer.get('user'),
});

const mapDispatchToProps = {
  deleteHobby: asyncActionsUser.deleteHobbyAsync,
};

export default connect(mapStateToProps, mapDispatchToProps)(RenderHobbiesList);
