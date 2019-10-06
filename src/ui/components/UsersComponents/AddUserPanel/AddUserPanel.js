import React, { useState, useRef } from 'react';
import { useDispatch } from 'react-redux';
import Styles from './AddUserPanel.module.scss';
import { asyncActionsUsers } from '../../../../core/saga/dataUsers/actions/asyncActionsUsers';

const AddUserPanel = () => {
  const inputValue = useRef();

  const dispatch = useDispatch();

  const [term, setTerm] = useState('');

  const addUserHandle = (e) => {
    e.preventDefault();
    const { current: { value } } = inputValue;
    if (value.length > 0) {
      const newUserObject = {
        id: Date.now(),
        name: value,
      };
      dispatch(asyncActionsUsers.addUserAsync(newUserObject));
      setTerm('');
      inputValue.current.value = '';
    } else {
      setTerm('enter the name, please!');
    }
  };

  return (
    <>
      <form className={Styles.AddForm} onSubmit={addUserHandle}>
        <div className={Styles.AddForm__InputBlock}>
          <input ref={inputValue} type="text" className={Styles.AddForm__Input} />
        </div>
        <button type="submit" className={Styles.AddForm__Button}>add user</button>
      </form>
      <p className={Styles.AddForm__Warning}>{term}</p>
    </>
  );
};

export default AddUserPanel;
