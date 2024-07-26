import React from 'react';
import {Image, TouchableOpacity, View} from 'react-native';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';

import styles from './styles';
import {icons} from '../../assets';
import HomeNavigator from '../HomeNavigator';
import ProfileNavigator from '../ProfileNavigator';

const Tab = createMaterialTopTabNavigator();

const tabIcons = {
  Home: {icon: icons.scanner},
  Profile: {icon: icons.profile},
};

const TabNavigator = (props) => {
  return (
    <Tab.Navigator
      screenOptions={{swipeEnabled: false}}
      initialRouteName="Home"
      tabBarPosition="bottom"
      tabBar={(tabProps) => <MyTabBar {...tabProps} {...props} />}>
      <Tab.Screen name="Home" component={HomeNavigator} />
      <Tab.Screen name="Profile" component={ProfileNavigator} />
    </Tab.Navigator>
  );
};

const MyTabBar = ({state, navigation}) => {
  return (
    <View style={styles.container}>
      {state.routes.map((route, index) => {
        const isFocused = state.index === index;

        const onPress = () => {
          if (!isFocused) {
            navigation.navigate(route.name);
          }
        };

        return (
          <TouchableOpacity onPress={onPress} activeOpacity={0.7} key={index}>
            <Image source={tabIcons[route?.name].icon} style={styles.icon} />
          </TouchableOpacity>
        );
      })}
    </View>
  );
};

export default TabNavigator;
