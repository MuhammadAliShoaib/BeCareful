import React, {useRef, useState} from 'react';
import {
  Image,
  Keyboard,
  TouchableOpacity,
  TouchableWithoutFeedback,
  View,
} from 'react-native';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';

import {icons} from '../../assets';
import MainButton from '../../components/Buttons/MainButton';
import CustomTextInput from '../../components/CustomTextInput';
import SuccessPopup from '../../components/Popups/SuccessPopup';
import SourceSansProRegular from '../../components/Wrappers/Text/SourceSansProRegular';
import SpeedRushRegular from '../../components/Wrappers/Text/SpeedRushRegular';
import useProfile from '../../hooks/useProfile';
import styles from './styles';

const ChangePasswordScreen = (props) => {
  const confirmRef = useRef(null);
  const newPassRef = useRef(null);
  const modalRef = useRef(null);
  const [currentPassword, setCurrentPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const {changePassword} = useProfile();

  const changePasswordHandler = () => {
    const data = {
      current_password: currentPassword,
      password: newPassword,
      password_confirmation: confirmPassword,
    };

    console.log('BODDDDYYYYYY=====>>>>>>>>>', data);
    // return;
    changePassword(data);
  };

  return (
    <KeyboardAwareScrollView
      style={styles.container}
      keyboardShouldPersistTaps="always">
      <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
        <View>
          <View style={styles.header}>
            <TouchableOpacity
              style={styles.backIconContainer}
              activeOpacity={0.7}
              onPress={() => props.navigation.goBack()}>
              <Image source={icons.back} style={styles.icon} />
            </TouchableOpacity>
            <SpeedRushRegular style={styles.heading}>
              Change Password
            </SpeedRushRegular>

            <SourceSansProRegular style={styles.smallText}>
              Type a new password
            </SourceSansProRegular>
          </View>

          <View style={styles.contentContainer}>
            <CustomTextInput
              label="Current Password"
              placeholder="Enter Current Password"
              required
              password
              returnKeyType="next"
              onSubmitEditing={() => newPassRef.current.focus()}
              onChangeText={setCurrentPassword}
              maxLength={16}
            />
            <CustomTextInput
              label="New Password"
              placeholder="Enter New Password"
              required
              password
              returnKeyType="next"
              reference={newPassRef}
              onSubmitEditing={() => confirmRef.current.focus()}
              onChangeText={setNewPassword}
              maxLength={16}
            />
            <CustomTextInput
              label="Confirm Password"
              placeholder="Confirm Password"
              required
              password
              reference={confirmRef}
              returnKeyType="done"
              onSubmitEditing={changePasswordHandler}
              onChangeText={setConfirmPassword}
              maxLength={16}
            />

            <View style={styles.buttonsRow}>
              <MainButton
                title="Update"
                style={styles.button}
                small
                // onPress={() => modalRef.current.show()}
                onPress={changePasswordHandler}
              />
              <MainButton
                title="Cancel"
                small
                onPress={() => props.navigation.goBack()}
              />
            </View>
          </View>

          <SuccessPopup
            reference={modalRef}
            heading="Password Updated"
            text="Your password has been updated
        Successfully!"
            buttonTitle="Ok"
          />
        </View>
      </TouchableWithoutFeedback>
    </KeyboardAwareScrollView>
  );
};

export default ChangePasswordScreen;
