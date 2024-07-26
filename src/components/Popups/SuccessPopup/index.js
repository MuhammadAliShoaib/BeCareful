import React, {useRef, useImperativeHandle} from 'react';
import {Image, TouchableOpacity, View} from 'react-native';

import PopupWrapper from '../PopupWrapper';
import styles from './styles';
import {generalImages} from '../../../assets';
import MainButton from '../../Buttons/MainButton';
import SpeedRushRegular from '../../Wrappers/Text/SpeedRushRegular';
import SourceSansProRegular from '../../Wrappers/Text/SourceSansProRegular';
import CustomImage from '../../CustomImage';

const SuccessPopup = ({heading, text, buttonTitle, ...props}) => {
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
    <PopupWrapper reference={popup} onCancel={props.onAccept}>
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
        <CustomImage source={generalImages.success} style={styles.icon} />
        <SpeedRushRegular style={styles.heading}>{heading}</SpeedRushRegular>
        <SourceSansProRegular style={styles.text}>{text}</SourceSansProRegular>
        <MainButton title={buttonTitle} onPress={onYes} small />
      </View>
    </PopupWrapper>
  );
};

export default SuccessPopup;
