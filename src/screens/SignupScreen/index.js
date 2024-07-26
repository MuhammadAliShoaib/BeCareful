import React, {useRef, useState} from 'react';
import {Keyboard, TouchableWithoutFeedback, View} from 'react-native';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';

import MainButton from '../../components/Buttons/MainButton';
import TextButton from '../../components/Buttons/TextButton';
import CustomTextInput from '../../components/CustomTextInput';
import SourceSansProRegular from '../../components/Wrappers/Text/SourceSansProRegular';
import SpeedRushRegular from '../../components/Wrappers/Text/SpeedRushRegular';
import useRegister from '../../hooks/useRegister';
import {validateName} from '../../utils/validation';
import styles from './styles';

const SignupScreen = (props) => {
  const emailRef = useRef(null);
  const passRef = useRef(null);
  const confirmRef = useRef(null);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [registerUser] = useRegister();

  const registerHandler = () => {
    const data = {
      name,
      email: email?.toLowerCase(),
      password,
      confirmPassword,
    };

    console.log('BODDDDYYYYYY=====>>>>>>>>>', data);
    registerUser(data);

    // console.log('working fine');
  };

  const onChangeName = (data) => {
    if (validateName(data)) {
      setName(data);
    }
  };

  return (
    <KeyboardAwareScrollView
      bounces={false}
      style={styles.container}
      showsVerticalScrollIndicator={false}
      keyboardShouldPersistTaps="always">
      <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
        <View>
          <View style={styles.header}>
            <SpeedRushRegular style={styles.heading}>Sign Up</SpeedRushRegular>
          </View>

          <View style={styles.contentContainer}>
            <CustomTextInput
              label="Name"
              placeholder="Enter Your Name"
              required
              returnKeyType="next"
              onSubmitEditing={() => emailRef.current.focus()}
              onChangeText={onChangeName}
              value={name}
            />

            <CustomTextInput
              label="Email"
              placeholder="Enter Your Email"
              required
              keyboardType="email-address"
              returnKeyType="next"
              reference={emailRef}
              onSubmitEditing={() => passRef.current.focus()}
              onChangeText={setEmail}
              value={email}
            />

            <CustomTextInput
              label="Password"
              placeholder="Enter Password"
              required
              password
              reference={passRef}
              returnKeyType="next"
              onSubmitEditing={() => confirmRef.current.focus()}
              onChangeText={setPassword}
              maxLength={16}
            />

            <CustomTextInput
              label="Confirm Password"
              placeholder="Confirm Password"
              required
              password
              reference={confirmRef}
              returnKeyType="done"
              onChangeText={setConfirmPassword}
              onSubmitEditing={registerHandler}
              maxLength={16}
            />

            <MainButton
              title="Create Account"
              style={styles.button}
              onPress={registerHandler}
            />

            <View style={styles.signupRow}>
              <SourceSansProRegular style={styles.blackText}>
                Already have an account?
              </SourceSansProRegular>
              <TextButton
                title="Login"
                onPress={() => props.navigation.navigate('LoginScreen')}
              />
            </View>
          </View>
        </View>
      </TouchableWithoutFeedback>
    </KeyboardAwareScrollView>
  );
};

export default SignupScreen;
