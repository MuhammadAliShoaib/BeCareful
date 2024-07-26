import {StyleSheet} from 'react-native';

import {appShadow, colors} from '../../utils/theme';
import {vh, vw} from '../../utils/units';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
  },
  header: {
    backgroundColor: colors.main,
    height: vh * 22,
    borderBottomLeftRadius: vh * 9,
    borderBottomRightRadius: vh * 9,
    alignItems: 'center',
    justifyContent: 'center',
  },
  heading: {
    fontSize: vh * 4,
    color: colors.white,
    marginTop: vh * 4,
  },
  contentContainer: {
    alignItems: 'center',
    marginTop: vh * 4,
  },
  rememberRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '80%',
    marginVertical: vh * 2,
  },
  rememberText: {
    color: colors.gray,
    marginLeft: vw * 2,
  },
  checkbox: {
    height: vh * 1.8,
    width: vw * 4,
    borderWidth: 1,
    borderRadius: vh * 0.3,
    borderColor: colors.black,
    alignItems: 'center',
    justifyContent: 'center',
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  check: {
    height: vh * 1.2,
    width: vh * 1.2,
    resizeMode: 'contain',
  },
  socialButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    borderColor: colors.lightBorder,
    borderWidth: 1,
    width: vw * 84,
    padding: vh * 2,
    borderRadius: vh * 4,
    marginVertical: vh * 1,
  },
  socialIcon: {
    height: vh * 2,
    width: vh * 2,
    resizeMode: 'contain',
  },
  text: {
    marginLeft: vw * 2,
    color: colors.black,
  },
  signupRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: vh * 2,
  },
  orRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: vh * 2,
  },
  line: {
    width: vw * 34,
    backgroundColor: colors.lightBorder,
    height: vh * 0.2,
  },
  orText: {
    color: colors.gray,
    marginHorizontal: vw * 5,
  },
  boxIcon: {
    height: vh * 2,
    width: vh * 2,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default styles;
