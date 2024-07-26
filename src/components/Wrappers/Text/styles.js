import {StyleSheet} from 'react-native';

import {fonts} from '../../../assets';
import {vw} from '../../../utils/units';

export default StyleSheet.create({
  text: {
    fontSize: vw * 4,
  },
  SourceSansProSemiBold: {
    fontFamily: fonts.SourceSansPro.SemiBold,
  },
  SourceSansProRegular: {
    fontFamily: fonts.SourceSansPro.Regular,
  },
  SpeedRushRegular: {
    fontFamily: fonts.SpeedRush.Regular,
  },
});
