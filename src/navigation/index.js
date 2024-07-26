import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {Provider} from 'react-redux';
import {PersistGate} from 'redux-persist/integration/react';

import ParentNavigator from './ParentNavigator';
import {persistor, store} from '../redux/store';
import Loader from '../components/Loader';

const Navigation = () => {
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <NavigationContainer>
          <Loader />
          <ParentNavigator />
        </NavigationContainer>
      </PersistGate>
    </Provider>
  );
};

export default Navigation;
