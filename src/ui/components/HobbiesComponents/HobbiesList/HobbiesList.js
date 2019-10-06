import React from 'react';
import { useDispatch } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons';
import { asyncActionsUser } from '../../../../core/saga/dataUser/actions/asyncActionUser';
import Styles from './HobbiesList.module.scss';

const HobbiesList = ({ item }) => {
  const dispatch = useDispatch();
  return (
    <div className={Styles.HobbiesList}>
      <p>{item.name}</p>
      {
        item.hobbies.length > 0 ? item.hobbies.map(hobby => (
          <div className={Styles.HobbiesList__Item} key={hobby.id}>
            <p>Passion: {hobby.level}</p>
            <p>{hobby.body}</p>
            <p>since: {hobby.yearStart}</p>
            <button onClick={() => dispatch(asyncActionsUser.deleteHobbyAsync(hobby.id, item.id))} type="button"><FontAwesomeIcon icon={faTrashAlt} /></button>
          </div>
        )) : <p className={Styles.HobbiesList__Info}>{item.name} has not hobbies</p>
      }
    </div>
  );
};

export default HobbiesList;
