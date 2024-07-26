import {StyleSheet} from 'react-native';

import {colors} from '../../utils/theme';
import {vh, vw} from '../../utils/units';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
    paddingTop: vh * 6,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginHorizontal: vw * 4,
  },
  iconContainer: {
    height: vh * 4,
    width: vh * 4,
    borderRadius: (vh * 4) / 2,
    backgroundColor: colors.main,
    alignItems: 'center',
    justifyContent: 'center',
  },
  icon: {
    height: vh * 2,
    width: vh * 2,
    resizeMode: 'contain',
  },
  imageContainer: {
    height: vh * 30,
    width: vw * 80,
    borderRadius: vh * 4,
    backgroundColor: colors.main,
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: vh * 6,
  },
  image: {
    height: vh * 35,
    width: vw * 80,
    borderRadius: vh * 4,
    marginVertical: vh * 6,
  },
  contentContainer: {
    alignItems: 'center',
  },
  text: {
    width: vw * 80,
    textAlign: 'center',
  },
  heading: {
    fontSize: vh * 2.5,
  },
});

export default styles;
