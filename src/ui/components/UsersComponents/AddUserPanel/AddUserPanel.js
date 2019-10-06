import React, { Component } from 'react';
import { connect } from 'react-redux';
import Styles from './AddUserPanel.module.scss';
import { asyncActionsUsers } from '../../../../core/saga/dataUsers/actions/asyncActionsUsers';

class AddUserPanel extends Component {
  inputValue = React.createRef();

  state = {
    term: '',
  };

  addUserHandle = (e) => {
    e.preventDefault();
    const { addUser } = this.props;
    const { current: { value } } = this.inputValue;
    if (value.length > 0) {
      const newUserObject = {
        id: Date.now(),
        name: value,
      };
      addUser(newUserObject);
      this.setState({ term: '' });
      this.inputValue.current.value = '';
    } else {
      this.setState({ term: 'enter the name, please!' });
    }
  };

  render() {
    const { term } = this.state;
    return (
      <>
        <form className={Styles.AddForm} onSubmit={this.addUserHandle}>
          <div className={Styles.AddForm__InputBlock}>
            <input ref={this.inputValue} type="text" className={Styles.AddForm__Input} />
          </div>
          <button type="submit" className={Styles.AddForm__Button}>add user</button>
        </form>
        <p className={Styles.AddForm__Warning}>{term}</p>
      </>
    );
  }
}

const mapDispatchToProps = {
  addUser: asyncActionsUsers.addUserAsync,
};

export default connect(null, mapDispatchToProps)(AddUserPanel);
