import React from 'react';
import {TouchableOpacity} from 'react-native';

import SourceSansProSemiBold from '../../Wrappers/Text/SourceSansProSemiBold';
import styles from './styles';

const MainButton = ({title, medium, small, transparent, onPress, style}) => {
  const buttonStyles = {
    default: styles.container,
    small: styles.small,
    medium: styles.medium,
    transparent: styles.transparent,
  };

  const textStyles = {
    default: styles.text,
    transparent: styles.transparentText,
  };

  const getStyles = () => {
    if (medium) {
      return buttonStyles['medium'];
    } else if (transparent) {
      return buttonStyles['transparent'];
    } else if (small) {
      return buttonStyles['small'];
    } else {
      return buttonStyles['default'];
    }
  };

  const getTextStyles = () => {
    if (transparent) {
      return textStyles['transparent'];
    } else {
      return textStyles['default'];
    }
  };

  return (
    <TouchableOpacity
      activeOpacity={0.7}
      style={[getStyles(), style]}
      onPress={onPress}>
      <SourceSansProSemiBold style={getTextStyles()}>
        {title}
      </SourceSansProSemiBold>
    </TouchableOpacity>
  );
};

export default MainButton;
