import {StyleSheet} from 'react-native';

import {appShadow, colors} from '../../utils/theme';
import {vh, vw} from '../../utils/units';

const styles = StyleSheet.create({
  container: {
    width: vw * 100,
    height: vh * 8,
    position: 'absolute',
    bottom: 0,
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-around',
    borderTopLeftRadius: vh * 3,
    borderTopRightRadius: vh * 3,
    backgroundColor: colors.white,
    ...appShadow,
  },
  icon: {
    height: vh * 4,
    width: vh * 4,
    resizeMode: 'contain',
  },
});

export default styles;
