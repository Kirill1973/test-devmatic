import React, { useState, useRef } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { asyncActionsUser } from '../../../../core/saga/dataUser/actions/asyncActionUser';
import Styles from './AddPanelHobbies.module.scss';

const AddPanelHobbies = () => {
  const item = useSelector(state => state.userDataReducer.get('user'));

  const dispatch = useDispatch();

  const selectValue = useRef(null);

  const inputOneValue = useRef(null);

  const inputTwoValue = useRef(null);

  const [term, setTerm] = useState('');

  const onAddHobby = (e) => {
    e.preventDefault();
    const { current: { value: selectValueRef } } = selectValue;
    const { current: { value: inputOneValueRef } } = inputOneValue;
    const { current: { value: inputTwoValueRef } } = inputTwoValue;
    if (selectValueRef !== 'DEFAULT' && inputOneValueRef.length > 0 && inputTwoValueRef.length > 0) {
      const newObj = {
        userId: item.id,
        id: Date.now(),
        level: selectValueRef,
        body: inputOneValueRef,
        yearStart: inputTwoValueRef,
      };
      dispatch(asyncActionsUser.addHobbiesAsync(newObj, item.id));
      inputOneValue.current.value = '';
      inputTwoValue.current.value = '';
      setTerm('');
    } else {
      setTerm('you have to fill in all inputs');
    }
  };

  return (
    <>
      <form className={Styles.AddPanelHobbies} onSubmit={onAddHobby}>
        <div className={Styles.AddPanelHobbies__Items}>
          <p className={Styles.AddPanelHobbies__Item}>
            <select defaultValue="DEFAULT" ref={selectValue} className={Styles.AddPanelHobbies__Select}>
              <option value="DEFAULT" disabled>select the level</option>
              <option>Low</option>
              <option>Medium</option>
              <option>High</option>
              <option>Very-High</option>
            </select>
          </p>
          <p className={Styles.AddPanelHobbies__Item}>
            <input ref={inputOneValue} type="text" placeholder="enter the hobby" className={Styles.AddPanelHobbies__Input} />
          </p>
        </div>
        <div className={Styles.AddPanelHobbies__Items}>
          <p className={Styles.AddPanelHobbies__Item}>
            <input ref={inputTwoValue} type="number" placeholder="enter year" className={Styles.AddPanelHobbies__Input} />
          </p>
          <p className={Styles.AddPanelHobbies__Item}>
            <button type="submit" className={Styles.AddPanelHobbies__Button}>add hobby</button>
          </p>
        </div>
      </form>
      <p className={Styles.AddPanelHobbies__Warning}>{term}</p>
    </>
  );
};

export default AddPanelHobbies;
