import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import ProfileScreen from '../../screens/ProfileScreen';
import EditProfileScreen from '../../screens/EditProfileScreen';
import ChangePasswordScreen from '../../screens/ChangePasswordScreen';
import DisclaimerScreen from '../../screens/Disclaimer';
const Stack = createStackNavigator();

const ProfileNavigator = (props) => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen component={ProfileScreen} name="ProfileScreen" />
      <Stack.Screen component={EditProfileScreen} name="EditProfileScreen" />
      <Stack.Screen
        component={ChangePasswordScreen}
        name="ChangePasswordScreen"
      />
      <Stack.Screen component={DisclaimerScreen} name="DisclaimerScreen" />
    </Stack.Navigator>
  );
};
export default ProfileNavigator;
