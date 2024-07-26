import React, { useEffect } from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { useSelector } from 'react-redux';

import AuthNavigator from '../AuthNavigator';
import TabNavigator from '../TabNavigator';
import { useCameraPermission, useMicrophonePermission } from 'react-native-vision-camera';

const Stack = createStackNavigator();

const ParentNavigator = (props) => {
  const token = useSelector((state) => state.auth.token);

  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      {/* {(token) ? (
        <Stack.Screen component={TabNavigator} name="TabNavigator" />
      ) : (
        <Stack.Screen component={AuthNavigator} name="AuthNavigator" />
      )} */}
      <Stack.Screen component={TabNavigator} name="TabNavigator" />
    </Stack.Navigator>
  );
};
export default ParentNavigator;
