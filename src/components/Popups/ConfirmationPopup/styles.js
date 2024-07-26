import {StyleSheet} from 'react-native';

import {colors} from '../../../utils/theme';
import {vh, vw} from '../../../utils/units';

const styles = StyleSheet.create({
  icon: {
    height: vh * 10,
    width: vh * 10,
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
    paddingVertical: vh * 4,
  },
  wrapperContainer: {
    borderRadius: vh * 4,
    position: 'relative',
    width: vw * 85,
    paddingVertical: vh * 3,
  },
  button: {
    backgroundColor: colors.main,
    width: vw * 30,
    paddingVertical: vh * 1.5,
  },
  buttonsRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: vw * 65,
  },
  transparentButton: {
    width: vw * 30,
    marginHorizontal: vw * 1,
    borderColor: colors.heading,
    borderWidth: 1,
  },
  heading: {
    fontSize: vh * 3,
    color: colors.black,
    marginVertical: vh * 1,
  },
  text: {
    color: colors.gray,
    width: vw * 70,
    textAlign: 'center',
    marginVertical: vh * 1,
  },
});

export default styles;
