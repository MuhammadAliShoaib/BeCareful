import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import InstructionScreen from '../../screens/InstructionScreen';
import CameraScreen from '../../screens/CameraScreen';

const Stack = createStackNavigator();

const HomeNavigator = props => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen component={CameraScreen} name="CameraScreen" />
      <Stack.Screen component={InstructionScreen} name="InstructionScreen" />
    </Stack.Navigator>
  );
};
export default HomeNavigator;
