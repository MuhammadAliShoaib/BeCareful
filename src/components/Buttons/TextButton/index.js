import React from 'react';
import {TouchableOpacity} from 'react-native';

import SourceSansProSemiBold from '../../Wrappers/Text/SourceSansProSemiBold';
import styles from './styles';

const TextButton = ({title, style, titleStyle, onPress}) => {
  return (
    <TouchableOpacity activeOpacity={0.7} style={style} onPress={onPress}>
      <SourceSansProSemiBold style={[styles.title, titleStyle]}>
        {title}
      </SourceSansProSemiBold>
    </TouchableOpacity>
  );
};

export default TextButton;
