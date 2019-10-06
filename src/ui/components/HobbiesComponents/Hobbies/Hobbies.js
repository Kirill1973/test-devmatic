import React from 'react';
import AddPanelHobbies from '../AddPanelHobbies/AddPanelHobbies';
import RenderHobbiesList from '../RenderHobbiesList/RenderHobbiesList';
import Styles from './Hobbies.module.scss';

const Hobbies = () => (
  <div className={Styles.Hobbies}>
    <AddPanelHobbies />
    <RenderHobbiesList />
  </div>
);

export default Hobbies;
