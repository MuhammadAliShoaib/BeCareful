import React from 'react';
import {Image, Touchable, TouchableOpacity, View} from 'react-native';

import {generalImages} from '../../assets';
import MainButton from '../../components/Buttons/MainButton';
import SourceSansProRegular from '../../components/Wrappers/Text/SourceSansProRegular';
import SpeedRushRegular from '../../components/Wrappers/Text/SpeedRushRegular';
import styles from './styles';
import {vh} from '../../utils/units';
import {colors} from '../../utils/theme';

const WelcomeScreen = (props) => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image source={generalImages.bubbles} style={styles.bubbles} />

        <View style={styles.textContainer}>
          <SpeedRushRegular style={styles.heading}>SafeStep</SpeedRushRegular>
          <SourceSansProRegular style={styles.headerText}>
            A platform build for a new way of working
          </SourceSansProRegular>
        </View>

        <View style={styles.logoContainer}>
          <Image source={generalImages.owl} style={styles.logo} />
        </View>
      </View>

      <View style={styles.contentContainer}>
        {/* <SourceSansProRegular style={styles.text}>
          Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
          nonumy
        </SourceSansProRegular> */}
        <MainButton
          title="Sign Up"
          medium
          onPress={() => props.navigation.navigate('SignupScreen')}
        />
        <MainButton
          title="Login"
          transparent
          onPress={() => props.navigation.navigate('LoginScreen')}
        />
      </View>
      <TouchableOpacity
        style={styles.disclaimerbtn}
        onPress={() => props.navigation.navigate('Disclaimer')}>
        <SourceSansProRegular
          style={[
            styles.text,
            {
              marginBottom: 0,
              textDecorationLine: 'underline',
              color: colors.red,
            },
          ]}>
          Disclaimer
        </SourceSansProRegular>
      </TouchableOpacity>
    </View>
  );
};

export default WelcomeScreen;
