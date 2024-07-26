import {StyleSheet} from 'react-native';

import {colors} from '../../utils/theme';
import {vh, vw} from '../../utils/units';

const styles = StyleSheet.create({
  modal: {
    flex: 1,
  },
  modalContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  blurBackground: {
    height: 100 * vh,
    width: 100 * vw,
    position: 'absolute',
    left: 0,
    top: 0,
    backgroundColor: 'rgba(0,0,0,0.7)',
  },
  blurView: {
    flex: 1,
  },
  contentContainer: {
    width: 85 * vw,
    elevation: 100,
    backgroundColor: colors.white,
    borderRadius: 10 * vw,
  },
  gradient: {
    flex: 1,
    borderRadius: 10 * vw,
  },
});

export default styles;
