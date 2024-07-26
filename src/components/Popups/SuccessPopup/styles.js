import {StyleSheet} from 'react-native';

import {colors} from '../../../utils/theme';
import {vh, vw} from '../../../utils/units';

const styles = StyleSheet.create({
  icon: {
    height: vh * 16,
    width: vh * 16,
  },
  crossCircle: {
    height: vh * 3,
    width: vh * 3,
    resizeMode: 'contain',
    position: 'absolute',
    top: 0,
    right: 0,
  },
  crossContainer: {
    height: vh * 3,
    width: vh * 3,
    position: 'absolute',
    top: -vh * 1,
    right: -vw * 2,
  },
  container: {
    alignItems: 'center',
    paddingHorizontal: vw * 1,
  },
  wrapperContainer: {
    borderRadius: vh * 4,
    width: vw * 85,
    paddingVertical: vh * 3,
    backgroundColor: colors.white,
  },
  button: {
    width: vw * 20,
  },
  heading: {
    fontSize: vh * 3,
    color: colors.black,
  },
  text: {
    color: colors.gray,
    width: vw * 70,
    textAlign: 'center',
    marginVertical: vh * 1,
  },
});

export default styles;
