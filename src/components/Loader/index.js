import React from 'react';
import {View, ActivityIndicator, Modal} from 'react-native';
import {useSelector} from 'react-redux';
// import {BlurView} from '@react-native-community/blur';

import styles from './styles';
import {colors} from '../../utils/theme';

const Loader = () => {
  const loading = useSelector(state => state.general.loading);

  return (
    <Modal transparent animationType="fade" visible={loading}>
      <View style={styles.modalContainer}>
        <View style={styles.blurBackground}>
          {/* <BlurView
              style={styles.blurView}
              blurType="light"
              blurAmount={6}
              reducedTransparencyFallbackColor="white"
            /> */}
        </View>
        <ActivityIndicator size="large" color={colors.main} />
      </View>
    </Modal>
  );
};

// const mapStatesToProps = state => {
//   return {
//     loading: state.GeneralReducer.loading,
//   };
// };

// export default connect(mapStatesToProps, null, null, {forwardRef: true})(
//   Loader,
// );

export default Loader;
