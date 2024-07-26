import React, {useRef} from 'react';
import {View, Image, TouchableOpacity} from 'react-native';

import {generalImages, icons} from '../../assets';
import SpeedRushRegular from '../../components/Wrappers/Text/SpeedRushRegular';
import SourceSansProRegular from '../../components/Wrappers/Text/SourceSansProRegular';
import styles from './styles';
import ConfirmationPopup from '../../components/Popups/ConfirmationPopup';
import CustomImage from '../../components/CustomImage';

const InstructionScreen = (props) => {
  const logoutRef = useRef(null);

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity
          style={styles.iconContainer}
          activeOpacity={0.7}
          onPress={() => props.navigation.goBack()}>
          <Image source={icons.back} style={styles.icon} />
        </TouchableOpacity>

        <SpeedRushRegular style={styles.heading}>
          How to use this App
        </SpeedRushRegular>
        <View />
      </View>

      <View style={styles.contentContainer}>
        <CustomImage source={generalImages.speaker} style={styles.image} />

        <SourceSansProRegular style={styles.text}>
          First, you have to tap the home screen scanner icon to activate the
          Object Detection tool. Then simply use it. Every time the application
          detects anything in front of it, the app says "watch out."
        </SourceSansProRegular>
      </View>

      <ConfirmationPopup
        reference={logoutRef}
        heading="Logout"
        text="Are you sure you want to logout?"
        onAccept={() => props.navigation.navigate('AuthNavigator')}
      />
    </View>
  );
};

export default InstructionScreen;
