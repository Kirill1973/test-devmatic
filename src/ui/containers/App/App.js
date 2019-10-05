import React from 'react';
import { Provider } from 'react-redux';
import Users from '../../components/Users/Users';
import Hobbies from '../../components/Hobbies/Hobbies';
import Styles from './App.module.scss';
import { store } from '../../../core/init/store';

const App = () => (
  <Provider store={store}>
    <div className={Styles.App}>
      <Users />
      <Hobbies />
    </div>
  </Provider>
);

export default App;
