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
    height: vh * 26,
    borderBottomLeftRadius: vh * 9,
    borderBottomRightRadius: vh * 9,
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
  },
  contentContainer: {
    alignItems: 'center',
    paddingTop: vh * 10,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  button: {
    backgroundColor: colors.main,
  },
  imageContainer: {
    marginTop: -vh * 8,
    alignSelf: 'center',
  },
  userImageContainer: {
    height: vh * 20,
    width: vh * 20,
    borderRadius: (vh * 20) / 2,
    ...appShadow,
  },
  userImage: {
    height: vh * 20,
    width: vh * 20,
    borderRadius: (vh * 20) / 2,
    resizeMode: 'contain',
  },
  icon: {
    height: vh * 2,
    width: vh * 2,
    resizeMode: 'contain',
  },
  cameraContainer: {
    height: vh * 4,
    width: vh * 4,
    borderRadius: (vh * 4) / 2,
    borderWidth: 1,
    borderColor: colors.white,
    backgroundColor: colors.main,
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute',
    bottom: vh * 1,
    right: vw * 1,
    zIndex: 999999999,
  },
  buttonsRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: vw * 80,
    marginVertical: vh * 4,
  },
});

export default styles;
