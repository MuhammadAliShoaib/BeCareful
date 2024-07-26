import React from 'react';

import TextHOC from './TextHOC';
import styles from './styles';

const SourceSansProSemiBold = props => {
  return (
    <TextHOC {...props} style={[styles.SourceSansProSemiBold, props?.style]}>
      {props.children}
    </TextHOC>
  );
};

export default SourceSansProSemiBold;
