import {StyleSheet} from 'react-native';

import {colors} from '../../utils/theme';
import {vh, vw} from '../../utils/units';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginHorizontal: vw * 4,
    marginTop: vh * 6,
    position: 'absolute',
    height: vh * 10,
    width: vw * 90,
    alignSelf: 'center',
    zIndex: 99999999,
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
  image: {
    height: vh * 35,
    width: vw * 80,
    borderRadius: vh * 4,
    marginVertical: vh * 6,
  },
  heading: {
    fontSize: vh * 2.5,
  },
  welcomeContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
  },
  welcomeImage: {
    width: 100,
    height: 80,
    resizeMode: 'contain',
    marginTop: 3,
    marginLeft: -10,
  },
  contentContainer: {
    paddingTop: 30,
  },
  loadingContainer: {
    marginTop: 80,
    justifyContent: 'center',
  },
  text: {
    color: '#ffffff',
    fontSize: 16,
  },
  loadingModelContainer: {
    flexDirection: 'row',
    marginTop: 10,
  },
  box: {
    width: vw * 80,
    height: vh * 65,
    borderColor: colors.main,
    borderWidth: 5,
    borderStyle: 'dashed',
    position: 'absolute',
    zIndex: 99999999,
    top: vh * 18,
    bottom: vh * 30,
    alignSelf: 'center',
  },
  imageContainer: {
    width: 250,
    height: 250,
    position: 'absolute',
    top: 10,
    left: 10,
    bottom: 10,
    right: 10,
  },
  predictionWrapper: {
    height: 100,
    width: '100%',
    flexDirection: 'column',
    alignItems: 'center',
  },
  transparentText: {
    color: '#ffffff',
    opacity: 0.7,
  },
  footer: {
    marginTop: 40,
  },
  poweredBy: {
    fontSize: 20,
    color: '#e69e34',
    marginBottom: 6,
  },
  tfLogo: {
    width: 125,
    height: 70,
  },
  loader: {
    tintColor: colors.white,
    height: vh * 20,
    width: vh * 20,
  },
  loaderContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
  },
});

export default styles;
