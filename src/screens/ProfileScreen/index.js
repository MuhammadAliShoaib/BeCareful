import React, {useCallback, useState} from 'react';
import {Image, View, RefreshControl, ScrollView} from 'react-native';
import {useFocusEffect} from '@react-navigation/native';

import {generalImages, icons} from '../../assets';
import MainButton from '../../components/Buttons/MainButton';
import SourceSansProRegular from '../../components/Wrappers/Text/SourceSansProRegular';
import SourceSansProSemiBold from '../../components/Wrappers/Text/SourceSansProSemiBold';
import TextButton from '../../components/Buttons/TextButton';
import styles from './styles';
import SpeedRushRegular from '../../components/Wrappers/Text/SpeedRushRegular';
import useProfile from '../../hooks/useProfile';
import {showToast} from '../../api/HelperFunction';
import CustomImage from '../../components/CustomImage';
import {useSelector} from 'react-redux';
import {colors} from '../../utils/theme';
import {vh} from '../../utils/units';

const ProfileScreen = (props) => {
  const {getProfile} = useProfile();
  const profile = useSelector((state) => state.profile?.user);
  const [refresh, setRefresh] = useState(false);

  const getProfileHandler = async () => {
    try {
      const response = await getProfile(true);
      console.log('PROFILEEE RESPONSE ON SCREEN', response.detail);
      setRefresh(false);
    } catch (error) {
      showToast(error);
      setRefresh(false);
    }
  };

  useFocusEffect(
    useCallback(() => {
      getProfileHandler();
    }, []),
  );

  console.log('USEERRRRR+++++=====>>>>>>', profile);

  const handleRefresh = () => {
    setRefresh(true);
    getProfileHandler();
  };

  const getImage = (url) => {
    if (url) {
      const values = url?.split('/');
      console.log('VALUEEEESSSS', values[values?.length - 1]);
      if (values[values?.length - 1] == 'null') {
        return generalImages.avatar;
      } else {
        return {uri: url};
      }
    }
  };

  return (
    <View style={{flex: 1, backgroundColor: colors.white}}>
      <View style={styles.header}>
        <SpeedRushRegular style={styles.heading}>Profile</SpeedRushRegular>
        <View style={styles.userImageContainer}>
          <CustomImage
            source={getImage(profile?.image_url)}
            style={styles.userImage}
          />
        </View>
      </View>

      <ScrollView
        style={styles.container}
        refreshControl={
          <RefreshControl refreshing={refresh} onRefresh={handleRefresh} />
        }>
        <View style={styles.contentContainer}>
          <SourceSansProSemiBold style={styles.userName}>
            {profile?.name}
          </SourceSansProSemiBold>
          <TextButton
            title="Change Password"
            titleStyle={styles.textButton}
            onPress={() => props.navigation.navigate('ChangePasswordScreen')}
          />

          <View style={styles.iconRow}>
            <Image source={icons.email} style={styles.icon} />
            <SourceSansProRegular style={styles.email}>
              {profile?.email}
            </SourceSansProRegular>
          </View>

          <View style={styles.contentContainer}>
            <MainButton
              title="Edit Profile"
              medium
              onPress={() =>
                props.navigation.navigate('EditProfileScreen', {profile})
              }
            />
          </View>
          {/* <View style={[styles.contentContainer, {marginTop: vh}]}>
            <MainButton
              title="Disclaimer"
              transparent
              onPress={() =>
                props.navigation.navigate('DisclaimerScreen', {profile})
              }
            />
          </View> */}
        </View>
      </ScrollView>
    </View>
  );
};

export default ProfileScreen;
