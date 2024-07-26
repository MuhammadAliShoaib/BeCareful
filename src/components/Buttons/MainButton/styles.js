import {StyleSheet} from 'react-native';

import {colors} from '../../../utils/theme';
import {vh, vw} from '../../../utils/units';

const styles = StyleSheet.create({
  container: {
    borderRadius: vh * 3,
    backgroundColor: colors.red,
    alignItems: 'center',
    justifyContent: 'center',
    width: vw * 84,
    paddingVertical: vh * 2,
    marginVertical: vh * 1,
  },
  medium: {
    borderRadius: vh * 3,
    backgroundColor: colors.red,
    alignItems: 'center',
    justifyContent: 'center',
    width: vw * 55,
    paddingVertical: vh * 2,
    marginVertical: vh * 1,
  },
  small: {
    borderRadius: vh * 3,
    backgroundColor: colors.red,
    alignItems: 'center',
    justifyContent: 'center',
    width: vw * 36,
    paddingVertical: vh * 2,
    marginVertical: vh * 1,
  },
  transparent: {
    borderRadius: vh * 3,
    backgroundColor: colors.white,
    alignItems: 'center',
    justifyContent: 'center',
    width: vw * 55,
    paddingVertical: vh * 2,
    marginVertical: vh * 1,
    borderWidth: 1,
    borderColor: colors.main,
  },
  text: {
    color: colors.white,
  },
  transparentText: {
    color: colors.main,
  },
});

export default styles;
