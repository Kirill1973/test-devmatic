import React, { Component } from 'react';
import { connect } from 'react-redux';
import { asyncActionsUser } from '../../../core/saga/dataUser/actions/asyncActionUser';
import Styles from './AddPanelHobbies.module.scss';

class AddPanelHobbies extends Component {
  selectValue = React.createRef();

  inputOneValue = React.createRef();

  inputTwoValue = React.createRef();

  state = {
    term: '',
  };

  onAddHobby = (e) => {
    e.preventDefault();
    const { addNewHobby, item } = this.props;
    const { current: { value: selectValue } } = this.selectValue;
    const { current: { value: inputOneValue } } = this.inputOneValue;
    const { current: { value: inputTwoValue } } = this.inputTwoValue;
    if (selectValue !== 'DEFAULT' && inputOneValue.length > 0 && inputTwoValue.length > 0) {
      const newObj = {
        id: item.id,
        name: item.name,
        hobbies: [
          ...item.hobbies,
          {
            userId: item.id,
            id: Date.now(),
            level: selectValue,
            body: inputOneValue,
            yearStart: inputTwoValue,
          },
        ],
      };
      addNewHobby(newObj, item.id);
      this.inputOneValue.current.value = '';
      this.inputTwoValue.current.value = '';
      this.setState({ term: '' });
    } else {
      this.setState({ term: 'you have to fill in all inputs' });
    }
  };

  render() {
    const { term } = this.state;
    return (
      <>
        <form className={Styles.AddPanelHobbies} onSubmit={this.onAddHobby}>
          <div className={Styles.AddPanelHobbies__Items}>
            <p className={Styles.AddPanelHobbies__Item}>
              <select defaultValue="DEFAULT" ref={this.selectValue} className={Styles.AddPanelHobbies__Select}>
                <option value="DEFAULT" disabled>select the level</option>
                <option>Low</option>
                <option>Medium</option>
                <option>High</option>
                <option>Very-High</option>
              </select>
            </p>
            <p className={Styles.AddPanelHobbies__Item}>
              <input ref={this.inputOneValue} type="text" placeholder="enter the hobby" className={Styles.AddPanelHobbies__Input} />
            </p>
          </div>
          <div className={Styles.AddPanelHobbies__Items}>
            <p className={Styles.AddPanelHobbies__Item}>
              <input ref={this.inputTwoValue} type="number" placeholder="enter year" className={Styles.AddPanelHobbies__Input} />
            </p>
            <p className={Styles.AddPanelHobbies__Item}>
              <button type="submit" className={Styles.AddPanelHobbies__Button}>add hobby</button>
            </p>
          </div>
        </form>
        <p className={Styles.AddPanelHobbies__Warning}>{term}</p>
      </>
    );
  }
}

const mapStateToProps = state => ({
  item: state.userDataReducer.get('user'),
});

const mapDispatchToProps = {
  addNewHobby: asyncActionsUser.updateHobbiesAsync,
};

export default connect(mapStateToProps, mapDispatchToProps)(AddPanelHobbies);
