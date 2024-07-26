import {StyleSheet} from 'react-native';

import {appShadow, colors} from '../../utils/theme';
import {vh, vw} from '../../utils/units';

const styles = StyleSheet.create({
  container: {
    marginVertical: vh * 2,
  },
  whiteContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: colors.white,
    borderRadius: vh * 3,
    borderWidth: 1,
    borderColor: colors.inputBorder,
    padding: vh * 2,
    width: vw * 84,
  },
  input: {
    width: '90%',
    color: colors.black,
  },
  label: {
    marginBottom: vh * 1,
    marginLeft: vw * 3,
    fontSize: vh * 1.8,
    color: colors.black,
  },
  icon: {
    height: vh * 2,
    width: vh * 2,
    resizeMode: 'contain',
    tintColor: '#989898',
  },
  labelRow: {
    flexDirection: 'row',
  },
  star: {
    color: colors.red,
  },
});

export default styles;
