import React from 'react';
import FastImage from 'react-native-fast-image';

const CustomImage = (props) => {
  return <FastImage {...props} source={props?.source} />;
};

export default CustomImage;
