import React, {useState, useImperativeHandle} from 'react';
import {Modal, StyleSheet, TouchableOpacity, View} from 'react-native';

import {colors} from '../../../utils/theme';
import {vh, vw} from '../../../utils/units';

const PopupWrapper = props => {
  const [visible, setVisible] = useState(false);

  useImperativeHandle(props?.reference, () => ({
    hide: hide,
    show: show,
  }));

  const hide = onCancel => {
    setVisible(false);
    if (typeof onCancel === 'function') {
      onCancel();
    } else {
      if (props.onCancel) {
        props.onCancel();
      }
    }
  };
  const show = onShow => {
    setVisible(true);
    if (typeof onShow === 'function') {
      onShow();
    } else {
      if (props.onShow) {
        props.onShow();
      }
    }
  };
  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={visible}
      style={styles.modal}>
      <View style={styles.mainContainer}>
        <TouchableOpacity
          onPress={hide}
          activeOpacity={0.9}
          style={styles.backdropContainer}>
          {/* <BlurView blurType="dark" style={styles.blur} /> */}
        </TouchableOpacity>
        <View style={[styles.contentContainer, props.contentContainerStyle]}>
          {props.children}
        </View>
      </View>
    </Modal>
  );
};
const styles = StyleSheet.create({
  modal: {
    flex: 1,
  },
  mainContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  backdropContainer: {
    height: 100 * vh,
    width: 100 * vw,
    position: 'absolute',
    top: 0,
    left: 0,
    backgroundColor: 'rgba(0,0,0,0.7)',
  },
  blur: {
    height: 100 * vh,
    width: 100 * vw,
  },
  contentContainer: {
    borderRadius: vh * 0.8,
    width: vw * 85,
    backgroundColor: colors.white,
  },
});
export default PopupWrapper;
