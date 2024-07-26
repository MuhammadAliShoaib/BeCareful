import {StyleSheet} from 'react-native';

import {appShadow, colors} from '../../utils/theme';
import {vh, vw} from '../../utils/units';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
  },
  logoContainer: {
    height: vh * 14,
    width: vh * 14,
    borderRadius: (vh * 14) / 2,
    backgroundColor: colors.white,
    alignItems: 'center',
    justifyContent: 'center',
    bottom: -vh * 5,
    alignSelf: 'center',
    position: 'absolute',
    ...appShadow,
  },
  logo: {
    height: vh * 10,
    width: vh * 10,
    resizeMode: 'contain',
  },
  header: {
    backgroundColor: colors.main,
    height: vh * 40,
    borderBottomLeftRadius: vh * 12,
    borderBottomRightRadius: vh * 12,
  },
  heading: {
    fontSize: vh * 4,
    color: colors.white,
  },
  bubbles: {
    height: vh * 30,
    width: '60%',
    resizeMode: 'contain',
    position: 'absolute',
    left: -vw * 22,
    top: -vh * 12,
  },
  textContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: vh * 18,
    marginBottom: vh * 10,
  },
  contentContainer: {
    alignItems: 'center',
    marginTop: vh * 10,
  },
  text: {
    textAlign: 'center',
    width: vw * 70,
    marginBottom: vh * 3,
  },
  headerText: {
    color: colors.white,
    marginTop: vh * 1,
  },
  disclaimerbtn: {
    height: vh * 5,
    alignItems: 'center',
    justifyContent: 'center',
    width: vw * 20,
    alignSelf: 'center',
  },
});

export default styles;
