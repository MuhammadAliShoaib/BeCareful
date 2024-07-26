import {StyleSheet} from 'react-native';
import {colors} from '../../utils/theme';
import {vh, vw} from '../../utils/units';
const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: colors.white,
  },
  header: {
    backgroundColor: colors.main,
    height: vh * 20,
    borderBottomLeftRadius: vh * 9,
    borderBottomRightRadius: vh * 9,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
  },
  contentContainerStyle: {
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
  },
  heading: {
    fontSize: vh * 4,
    color: colors.white,
  },
  icon: {
    height: vh * 2,
    width: vh * 2,
    resizeMode: 'contain',
  },
  backIconContainer: {
    left: vw * 5,
    top: 0,
    position: 'absolute',
    height: vh * 20,
    justifyContent: 'center',
  },
  smallText: {
    color: colors.white,
    fontSize: vh * 1.5,
  },
  paraContainer: {
    width: vw * 90,
    marginTop: vh * 1.5,
  },
  txtStyle: {fontSize: vh * 2, color: colors.textColor},
});
export default styles;
