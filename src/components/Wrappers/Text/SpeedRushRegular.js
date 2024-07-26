import React from 'react';

import TextHOC from './TextHOC';
import styles from './styles';

const SpeedRushRegular = props => {
  return (
    <TextHOC {...props} style={[styles.SpeedRushRegular, props?.style]}>
      {props.children}
    </TextHOC>
  );
};

export default SpeedRushRegular;
