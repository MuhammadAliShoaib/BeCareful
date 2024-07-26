import {StyleSheet} from 'react-native';

import {appShadow, colors} from '../../utils/theme';
import {vh, vw} from '../../utils/units';

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    backgroundColor: colors.white,
  },
  userImageContainer: {
    height: vh * 20,
    width: vh * 20,
    borderRadius: (vh * 20) / 2,
    alignSelf: 'center',
    backgroundColor: colors.white,
    bottom: -vh * 18,
    ...appShadow,
  },
  userImage: {
    height: vh * 20,
    width: vh * 20,
    borderRadius: (vh * 20) / 2,
  },
  header: {
    backgroundColor: colors.main,
    height: vh * 38,
    borderBottomLeftRadius: vh * 12,
    borderBottomRightRadius: vh * 12,
    zIndex: 99999999,
  },
  headerRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginHorizontal: vw * 4,
    marginTop: vh * 6,
  },
  heading: {
    fontSize: vh * 2.8,
    color: colors.white,
    textAlign: 'center',
    marginTop: vh * 6,
  },
  contentContainer: {
    alignItems: 'center',
    marginTop: vh * 10,
  },
  textButton: {
    color: colors.red,
  },
  userName: {
    fontSize: vh * 2.5,
    color: colors.black,
    textTransform: 'capitalize',
  },
  icon: {
    height: vh * 2,
    width: vh * 2,
    resizeMode: 'contain',
  },
  iconRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: vh * 5,
  },
  email: {
    marginLeft: vw * 2,
    color: colors.black,
  },
});

export default styles;
