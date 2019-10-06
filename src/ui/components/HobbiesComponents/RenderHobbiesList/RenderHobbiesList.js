import React from 'react';
import { useSelector } from 'react-redux';
import HobbiesList from '../HobbiesList/HobbiesList';
import Styles from './RenderHobbiesList.module.scss';

const RenderHobbiesList = () => {
  const item = useSelector(state => state.userDataReducer.get('user'));
  return (
    <div>
      {
        Object.keys(item).length > 0 ? <HobbiesList item={item} /> : <p className={Styles.RenderHobbiesList__Warning}>Select the user, please!!!</p>
      }
    </div>
  );
};

export default RenderHobbiesList;
