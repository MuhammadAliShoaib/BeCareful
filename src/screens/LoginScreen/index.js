import React, {useCallback, useRef, useState} from 'react';
import {useFocusEffect} from '@react-navigation/native';
import {Image, ImageBackground, TouchableOpacity, View} from 'react-native';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import {useSelector} from 'react-redux';
// import * as Permissions from 'expo-permissions';

import {icons} from '../../assets';
import MainButton from '../../components/Buttons/MainButton';
import TextButton from '../../components/Buttons/TextButton';
import CustomTextInput from '../../components/CustomTextInput';
import SourceSansProRegular from '../../components/Wrappers/Text/SourceSansProRegular';
import SpeedRushRegular from '../../components/Wrappers/Text/SpeedRushRegular';
import useLogin from '../../hooks/useLogin';
import styles from './styles';

const LoginScreen = (props) => {
  const rememberData = useSelector((state) => state.auth.rememberData);
  const [remember, setRemember] = useState(rememberData ? true : false);
  const [email, setEmail] = useState(rememberData?.email);
  const [password, setPassword] = useState(rememberData?.password);
  const passRef = useRef(null);
  const [loginUser] = useLogin();
  const currentRoute = props.route.name;
  console.log('DATAAAA REMEMBERRRRR======>>>>>>>', rememberData);
  console.log('CURRENT ===========>>>>>>>', currentRoute);

  const loginHandler = () => {
    const data = {
      email: email?.toLowerCase(),
      password,
      remember,
    };

    console.log('BODDDDYYYYYY=====>>>>>>>>>', data, remember);
    // return;
    loginUser(data);
  };

  useFocusEffect(
    useCallback(() => {
      getPermissionAsync();
    }, []),
  );

  const getPermissionAsync = async () => {
    // const {status_roll} = await Permissions.askAsync(Permissions.CAMERA);
    // if (Constants.platform.android) {
    //   const status = await Permissions.askAsync(Permissions.CAMERA);
    //   if (status.status !== 'granted') {
    //     alert('Please grant camera roll permission for this project!');
    //   }
    // }
  };

  return (
    <KeyboardAwareScrollView
      style={styles.container}
      keyboardShouldPersistTaps="always">
      <View style={styles.header}>
        <SpeedRushRegular style={styles.heading}>Login</SpeedRushRegular>
      </View>

      <View style={styles.contentContainer}>
        <CustomTextInput
          label="Email Address"
          placeholder="Enter Your Email Address"
          required
          keyboardType="email-address"
          returnKeyType="next"
          onSubmitEditing={() => passRef.current.focus()}
          onChangeText={setEmail}
          key={1}
          value={email}
        />

        <CustomTextInput
          label="Password"
          placeholder="Enter Your Password"
          required
          password
          reference={passRef}
          returnKeyType="done"
          onSubmitEditing={loginHandler}
          onChangeText={setPassword}
          key={2}
          value={password}
          maxLength={16}
        />

        <View style={styles.rememberRow}>
          <View style={styles.row}>
            {/* <TouchableOpacity
              activeOpacity={0.7}
              style={styles.checkbox}
              onPress={() => setRemember(!remember)}>
              {remember && <Image source={icons.check} style={styles.check} />}
            </TouchableOpacity> */}

            <TouchableOpacity
              activeOpacity={0.7}
              onPress={() => setRemember(!remember)}>
              <ImageBackground source={icons.box} style={styles.boxIcon}>
                {remember && (
                  <Image source={icons.check} style={styles.check} />
                )}
              </ImageBackground>
            </TouchableOpacity>
            <SourceSansProRegular style={styles.rememberText}>
              Remember me
            </SourceSansProRegular>
          </View>

          <TextButton
            title="Forgot Password?"
            onPress={() => props.navigation.navigate('ForgotPasswordScreen')}
          />
        </View>

        <MainButton
          title="Login"
          // onPress={() => props.navigation.navigate('TabNavigator')}
          onPress={loginHandler}
        />

        <View style={styles.signupRow}>
          <SourceSansProRegular>Don't have an account?</SourceSansProRegular>
          <TextButton
            title="Signup"
            onPress={() => props.navigation.navigate('SignupScreen')}
          />
        </View>

        {/* <View style={styles.orRow}>
          <View style={styles.line} />
          <SourceSansProRegular style={styles.orText}>or</SourceSansProRegular>
          <View style={styles.line} />
        </View>

        <TouchableOpacity style={styles.socialButton} activeOpacity={0.7}>
          <Image source={generalImages.google} style={styles.socialIcon} />
          <SourceSansProRegular style={styles.text}>
            Sign up with Google
          </SourceSansProRegular>
        </TouchableOpacity>

        <TouchableOpacity style={styles.socialButton} activeOpacity={0.7}>
          <Image source={generalImages.facebook} style={styles.socialIcon} />
          <SourceSansProRegular style={styles.text}>
            Sign up with Facebook
          </SourceSansProRegular>
        </TouchableOpacity> */}
      </View>
    </KeyboardAwareScrollView>
  );
};

export default LoginScreen;
