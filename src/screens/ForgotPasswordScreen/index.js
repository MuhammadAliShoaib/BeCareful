import React, {useRef, useState} from 'react';
import {LayoutAnimation, View} from 'react-native';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import {showToast} from '../../api/HelperFunction';

import MainButton from '../../components/Buttons/MainButton';
import TextButton from '../../components/Buttons/TextButton';
import CustomTextInput from '../../components/CustomTextInput';
import SuccessPopup from '../../components/Popups/SuccessPopup';
import SourceSansProRegular from '../../components/Wrappers/Text/SourceSansProRegular';
import SpeedRushRegular from '../../components/Wrappers/Text/SpeedRushRegular';
import useForgotPassword from '../../hooks/useForgotPassword';
import styles from './styles';

const ForgotPasswordScreen = (props) => {
  const [step, setStep] = useState(1);
  const [email, setEmail] = useState('');
  const [code, setCode] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const confirmRef = useRef(null);
  const modalRef = useRef(null);
  const [verifyEmail, verifyCode, resetPassword] = useForgotPassword();

  const verifyEmailHandler = async (resend) => {
    const data = {
      email: email.toLowerCase(),
    };

    console.log('BODDDDYYYYYY=====>>>>>>>>>', data);
    try {
      const response = await verifyEmail(data);
      console.log('RESPONSE ON SCREEEN=====>>>>>>>>>', response);
      showToast(response?.message);
      if (!resend) {
        LayoutAnimation.configureNext(LayoutAnimation.Presets.linear);
        setStep(step + 1);
      }
    } catch (error) {
      console.log('ERROR ON SCREEEN=====>>>>>>>>>', error);
      showToast(error);
    }
  };

  const verifyCodeHandler = async () => {
    const data = {
      email: email.toLowerCase(),
      code,
    };

    console.log('BODDDDYYYYYY=====>>>>>>>>>', data);
    try {
      const response = await verifyCode(data);
      console.log('RESPONSE ON SCREEEN=====>>>>>>>>>', response);
      showToast(response?.message);
      LayoutAnimation.configureNext(LayoutAnimation.Presets.linear);
      setStep(step + 1);
    } catch (error) {
      console.log('ERROR ON SCREEEN=====>>>>>>>>>', error);
      showToast(error);
    }
  };

  const resetPasswordHandler = async () => {
    const data = {
      email: email.toLowerCase(),
      code,
      password,
      password_confirmation: confirmPassword,
    };

    console.log('BODDDDYYYYYY=====>>>>>>>>>', data);
    try {
      const response = await resetPassword(data);
      console.log('RESPONSE ON SCREEEN=====>>>>>>>>>', response);
      showToast(response?.message);
      // LayoutAnimation.configureNext(LayoutAnimation.Presets.linear);
      // setStep(step + 1);
      props.navigation.goBack();
    } catch (error) {
      console.log('ERROR ON SCREEEN=====>>>>>>>>>', error);
      showToast(error);
    }
  };

  const renderStepOne = () => {
    return (
      <CustomTextInput
        label="Email Address"
        placeholder="Enter Your Email Address"
        required
        keyboardType="email-address"
        returnKeyType="done"
        onSubmitEditing={onSubmitHandler}
        onChangeText={setEmail}
        key={1}
      />
    );
  };

  const renderStepTwo = () => {
    return (
      <View>
        <CustomTextInput
          label="Verification Code"
          placeholder="Enter Verification Code"
          required
          returnKeyType="done"
          onSubmitEditing={onSubmitHandler}
          onChangeText={setCode}
          key={2}
          keyboardType={'number-pad'}
          maxLength={6}
        />
        <TextButton
          title="Resend"
          style={styles.textButton}
          onPress={() => verifyEmailHandler(true)}
        />
      </View>
    );
  };

  const renderStepThree = () => {
    return (
      <View>
        <CustomTextInput
          label="New Password"
          placeholder="Enter New Password"
          required
          password
          returnKeyType="next"
          onSubmitEditing={() => confirmRef.current.focus()}
          onChangeText={setPassword}
          value={password}
          key={3}
          maxLength={16}
        />
        <CustomTextInput
          label="Confirm Password"
          placeholder="Confirm Password"
          required
          password
          reference={confirmRef}
          returnKeyType="done"
          onSubmitEditing={() => modalRef.current.show()}
          onChangeText={setConfirmPassword}
          value={confirmPassword}
          key={4}
          maxLength={16}
        />
      </View>
    );
  };

  const steps = {1: renderStepOne(), 2: renderStepTwo(), 3: renderStepThree()};
  const stepHandlers = {
    1: verifyEmailHandler,
    2: verifyCodeHandler,
    3: resetPasswordHandler,
  };

  const text = {
    1: 'Enter your email address to receive a verification code',
    2: 'Enter the verification code sent on your email address',
    3: 'Type in a new password',
  };

  const heading = {
    1: 'Forgot Password',
    2: 'Forgot Password',
    3: 'Set Password',
  };

  const renderContent = () => {
    return steps[step];
  };

  const renderText = () => {
    return text[step];
  };

  const renderHeading = () => {
    return heading[step];
  };

  const onSubmitHandler = async () => {
    console.log('sdfsfsfsf');
    await stepHandlers[step]();
    // setStep(step + 1);
    return;

    if (step == 3) {
      return modalRef.current.show();
    } else {
      LayoutAnimation.configureNext(LayoutAnimation.Presets.linear);
      setStep(step + 1);
    }
  };

  return (
    <KeyboardAwareScrollView style={styles.container}>
      <View style={styles.header}>
        <SpeedRushRegular style={styles.heading}>
          {renderHeading()}
        </SpeedRushRegular>

        <SourceSansProRegular style={styles.smallText}>
          {renderText()}
        </SourceSansProRegular>
      </View>

      <View style={styles.contentContainer}>
        {renderContent()}
        <MainButton
          title={step == 3 ? 'Submit' : 'Continue'}
          onPress={onSubmitHandler}
          style={styles.button}
        />
      </View>

      <SuccessPopup
        reference={modalRef}
        onAccept={() => props.navigation.navigate('LoginScreen')}
        heading="Password Reset"
        text="Your password has been reset. 
        Please login to continue"
        buttonTitle="Continue"
      />
    </KeyboardAwareScrollView>
  );
};

export default ForgotPasswordScreen;
