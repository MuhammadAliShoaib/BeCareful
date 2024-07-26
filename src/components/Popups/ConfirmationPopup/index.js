import React, {useRef, useImperativeHandle} from 'react';
import {Image, TouchableOpacity, View} from 'react-native';

import PopupWrapper from '../PopupWrapper';
import styles from './styles';
import MainButton from '../../Buttons/MainButton';
import {generalImages} from '../../../assets';
import SpeedRushRegular from '../../Wrappers/Text/SpeedRushRegular';
import SourceSansProRegular from '../../Wrappers/Text/SourceSansProRegular';
import {colors} from '../../../utils/theme';
import CustomImage from '../../CustomImage';

const ConfirmationPopup = ({heading, text, buttonTitle, ...props}) => {
  let popup = useRef(null);

  useImperativeHandle(props?.reference, () => ({
    hide: hide,
    show: show,
  }));

  const show = () => {
    popup?.current?.show();
  };

  const hide = () => {
    popup?.current?.hide();
  };

  const onYes = () => {
    if (props?.onAccept) {
      props?.onAccept();
    }

    hide();
  };

  return (
    <PopupWrapper reference={popup}>
      <View style={styles.container}>
        <TouchableOpacity
          activeOpacity={0.7}
          style={styles.crossContainer}
          onPress={hide}>
          <Image
            source={generalImages.crossCircle}
            style={styles.crossCircle}
          />
        </TouchableOpacity>

        <CustomImage source={generalImages.question} style={styles.icon} />
        <SpeedRushRegular style={styles.heading}>{heading}</SpeedRushRegular>
        <SourceSansProRegular style={styles.text}>{text}</SourceSansProRegular>
        <View style={styles.buttonsRow}>
          <MainButton
            title="Yes"
            style={[styles.button, {backgroundColor: colors.red}]}
            onPress={onYes}
          />
          <MainButton title="No" style={styles.button} onPress={hide} />
        </View>
      </View>
    </PopupWrapper>
  );
};

export default ConfirmationPopup;
