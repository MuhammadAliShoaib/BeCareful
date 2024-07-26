import React from 'react';

import TextHOC from './TextHOC';
import styles from './styles';

const SourceSansProRegular = props => {
  return (
    <TextHOC {...props} style={[styles.SourceSansProRegular, props?.style]}>
      {props.children}
    </TextHOC>
  );
};

export default SourceSansProRegular;
