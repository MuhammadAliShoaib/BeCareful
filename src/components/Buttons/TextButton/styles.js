import {StyleSheet} from 'react-native';

import {colors} from '../../../utils/theme';
import {vh} from '../../../utils/units';

const styles = StyleSheet.create({
  title: {
    textDecorationLine: 'underline',
    color: colors.main,
    fontSize: vh * 2,
  },
});

export default styles;
