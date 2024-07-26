import React, {useCallback, useRef, useState} from 'react';
import {Image, LayoutAnimation, TouchableOpacity, View} from 'react-native';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';

import {generalImages, icons} from '../../assets';
import MainButton from '../../components/Buttons/MainButton';
import CustomImage from '../../components/CustomImage';
import CustomTextInput from '../../components/CustomTextInput';
import ImagePicker from '../../components/ImagePicker';
import SpeedRushRegular from '../../components/Wrappers/Text/SpeedRushRegular';
import useProfile from '../../hooks/useProfile';
import styles from './styles';
import {useFocusEffect} from '@react-navigation/native';
import {validateName} from '../../utils/validation';

const EditProfileScreen = (props) => {
  const emailRef = useRef(null);
  const passRef = useRef(null);
  const profile = props.route?.params?.profile;
  const [name, setName] = useState(profile?.name);
  const [image, setImage] = useState(profile?.image_url);
  const [tempImage, setTempImage] = useState(null);
  const pickerRef = useRef(null);
  const {editProfile} = useProfile();

  const editProfileHandler = () => {
    const data = {
      name,
    };

    if (tempImage) {
      // let items = tempImage?.uri?.split('/');
      // let type = items[items?.length - 1].split('.')[1];

      const imageObj = {
        name: tempImage?.fileName,
        type: tempImage?.type,
        uri: tempImage?.uri,
      };

      data['image'] = imageObj;
    }

    console.log('BODDDDYYYYYY=====>>>>>>>>>', data);
    // return;
    editProfile(data);
  };

  const imagePickerHandler = async (response) => {
    console.log('RESSSS=====>>>>>>>>>>', response);
    LayoutAnimation.configureNext(LayoutAnimation.Presets.linear);
    setTempImage(response[0]);
  };

  const getImage = () => {
    if (tempImage) {
      return {uri: tempImage?.uri};
    } else {
      const values = image?.split('/');
      console.log('VALUEEEESSSS', values[values?.length - 1]);
      if (values[values?.length - 1] == 'null') {
        return generalImages.avatar;
      } else {
        return {uri: image};
      }
    }
  };

  useFocusEffect(
    useCallback(() => {
      // takePermissions();
    }, []),
  );

  const onChangeName = (data) => {
    if (validateName(data)) {
      setName(data);
    }
  };

  return (
    <KeyboardAwareScrollView
      bounces={false}
      style={styles.container}
      showsVerticalScrollIndicator={false}>
      <View style={styles.header}>
        <View style={styles.headerRow}>
          <TouchableOpacity
            activeOpacity={0.7}
            onPress={() => props.navigation.goBack()}>
            <Image source={icons.back} style={styles.icon} />
          </TouchableOpacity>

          <SpeedRushRegular style={styles.heading}>
            Edit Profile
          </SpeedRushRegular>
          <View />
        </View>
      </View>

      <View style={styles.imageContainer}>
        <TouchableOpacity
          style={styles.cameraContainer}
          onPress={() => pickerRef.current.show()}
          activeOpacity={0.7}>
          <Image source={icons.camera} style={styles.icon} />
        </TouchableOpacity>
        <View>
          <CustomImage source={getImage()} style={styles.userImage} />
        </View>
      </View>

      <View style={styles.contentContainer}>
        <CustomTextInput
          label="Name"
          placeholder="Enter Your Name"
          required
          returnKeyType="next"
          onSubmitEditing={() => emailRef.current.focus()}
          value={name}
          onChangeText={onChangeName}
        />

        <CustomTextInput
          label="Email"
          placeholder="Enter Your Email"
          keyboardType="email-address"
          returnKeyType="next"
          reference={emailRef}
          onSubmitEditing={() => passRef.current.focus()}
          editable={false}
          value={profile?.email}
        />

        <View style={styles.buttonsRow}>
          <MainButton
            title="Save Changes"
            style={styles.button}
            small
            onPress={editProfileHandler}
          />
          <MainButton
            title="Cancel"
            small
            onPress={() => props.navigation.goBack()}
          />
        </View>
      </View>

      <ImagePicker
        ref={pickerRef}
        handleOnSelectImage={imagePickerHandler}
        single
      />
    </KeyboardAwareScrollView>
  );
};

export default EditProfileScreen;
