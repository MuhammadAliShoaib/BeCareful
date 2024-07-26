import React, {Component} from 'react';
import {View, Modal, TouchableOpacity, Image} from 'react-native';
import {launchCamera, launchImageLibrary} from 'react-native-image-picker';
// import {BlurView} from '@react-native-community/blur';

import SourceSansProRegular from '../Wrappers/Text/SourceSansProRegular';
import styles from './styles';
import {vh, vw} from '../../utils/units';
import {generalImages} from '../../assets';

class ImagePicker extends Component {
  constructor(props) {
    super(props);
    this.state = {
      visible: false,
    };
  }

  show = (data) => {
    this.setState((p) => {
      return {
        ...p,
        visible: true,
      };
    });
  };

  hide = () => {
    this.setState((p) => {
      return {
        ...p,
        visible: false,
      };
    });
  };

  onCross = () => {
    this.hide();
  };

  handleOnSelectCamera = () => {
    this.hide();

    setTimeout(() => {
      launchCamera(
        {
          includeBase64: false,
          quality: 0.4,
        },
        (response) => {
          if (this.props.handleOnSelectImage && response?.assets) {
            this.props.handleOnSelectImage(response.assets);
          }
        },
      );
    }, 500);
  };

  handleOnSelectPhoto = () => {
    this.hide();

    setTimeout(() => {
      launchImageLibrary(
        {
          includeBase64: false,
          quality: 0.2,
          selectionLimit: this.props.single ? 1 : 0,
        },
        (response) => {
          if (this.props.handleOnSelectImage && response?.assets) {
            this.props.handleOnSelectImage(response.assets);
          }
        },
      );
    }, 500);
  };

  render() {
    return (
      <Modal
        key={'cbdfdfczcxzt'}
        visible={this.state.visible}
        transparent={true}
        animationType="fade">
        {/* <BlurView
          style={{position: 'absolute', width: vw * 100, height: vh * 100}}
          blurType="light"
          blurAmount={5}
          reducedTransparencyFallbackColor="white"
        /> */}
        <TouchableOpacity
          style={styles.modalTouchable}
          onPress={() => {
            this.hide();
          }}
        />
        <View style={styles.imageBg}>
          <TouchableOpacity
            style={styles.crossContainer}
            onPress={this.onCross}>
            <Image source={generalImages.crossCircle} style={styles.cross} />
          </TouchableOpacity>

          <View
            style={{
              backgroundColor: 'rgba(52, 52, 52, 0.15)',
              height: vh * 0.1,
              width: 100 * vw,
              marginTop: 2 * vh,
              marginBottom: 2 * vh,
            }}
          />
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              width: 100 * vw,
              justifyContent: 'space-evenly',
            }}>
            <TouchableOpacity
              style={{alignItems: 'center'}}
              onPress={() => this.handleOnSelectCamera()}>
              <Image
                source={generalImages.camera_icon}
                style={{
                  resizeMode: 'contain',
                  width: 10 * vw,
                  height: 10 * vh,
                }}
              />
              <SourceSansProRegular style={styles.facebooktext}>
                Camera
              </SourceSansProRegular>
            </TouchableOpacity>

            <TouchableOpacity
              style={{alignItems: 'center'}}
              onPress={this.handleOnSelectPhoto}>
              <Image
                source={generalImages.picture_folder}
                style={{
                  resizeMode: 'contain',
                  width: 10 * vw,
                  height: 10 * vh,
                  marginTop: vh * 1,
                }}
              />
              <SourceSansProRegular style={styles.facebooktext}>
                Photo
              </SourceSansProRegular>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    );
  }
}

export default ImagePicker;
