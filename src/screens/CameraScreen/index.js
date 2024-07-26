import React, {useCallback, useEffect, useMemo, useRef, useState} from 'react';
import {View, Image, TouchableOpacity, Vibration, Platform} from 'react-native';
import Lottie from 'lottie-react-native';
import {useDispatch} from 'react-redux';
import {useIsFocused} from '@react-navigation/native';
import styles from './styles';

import {generalImages, icons, sound} from '../../assets';
import ConfirmationPopup from '../../components/Popups/ConfirmationPopup';

import {setUser} from '../../redux/profile';
import {setToken} from '../../redux/auth';

import {
  Camera,
  runAsync,
  runAtTargetFps,
  useCameraDevice,
  useCameraPermission,
  useFrameProcessor,
  useMicrophonePermission,
} from 'react-native-vision-camera';
import {useTensorflowModel} from 'react-native-fast-tflite';
import {useResizePlugin} from 'vision-camera-resize-plugin';
import {getBestFormat} from './formatFilter';
import {Worklets, worklet} from 'react-native-worklets-core';
import {EventRegister} from 'react-native-event-listeners';
const classes = require('./classes.json')
const modelFile = require('../../assets/ssd_mobilenet_v1_meta.tflite');

var Sound = require('react-native-sound');
Sound.setCategory('Playback');

var ding = new Sound(sound, error => {
  if (error) {
    console.log('failed to load the sound', error);
    return;
  }
  // if loaded successfully
  console.log(
    'duration in seconds: ' +
      ding.getDuration() +
      'number of channels: ' +
      ding.getNumberOfChannels(),
  );
});

const CameraScreen = props => {
  const dispatch = useDispatch();
  const logoutRef = useRef(null);

  const {
    hasPermission: hasCameraPermission,
    requestPermission: requestCameraPermission,
  } = useCameraPermission();
  const {
    hasPermission: hasMicPermission,
    requestPermission: requestMicPermission,
  } = useMicrophonePermission();

  const delegate = Platform.OS === 'ios' ? 'core-ml' : undefined;
  const tfModel = useTensorflowModel(modelFile, delegate);

  const isFocused = useIsFocused();

  useEffect(() => {
    if (!hasCameraPermission) {
      requestCameraPermission();
    }
    if (!hasMicPermission) {
      requestMicPermission();
    }
    const devices = Camera.getAvailableCameraDevices();
  }, []);

  useEffect(() => {
    ding.setVolume(1);
    return () => {
      ding.release();
    };
  }, []);

  const processOutput = Worklets.createRunOnJS(output => {
    const [boxes, classes, scores, numDetections] = output;

    const detections = [];
    for (let i = 0; i < numDetections[0]; i++) {
      const score = scores[i];
      if (score > 0.1) {
        // Confidence threshold
        const classIndex = classes[i];
        const [yMin, xMin, yMax, xMax] = [
          boxes[i * 4],
          boxes[i * 4 + 1],
          boxes[i * 4 + 2],
          boxes[i * 4 + 3],
        ];

        detections.push({
          classIndex,
          score,
          box: {
            yMin,
            xMin,
            yMax,
            xMax,
          },
        });
      }
    }

    return detections;
  });

  const playSound = Worklets.createRunOnJS(() => {
    ding.play(success => {
      if (success) {
        console.log('successfully finished playing');
      } else {
        console.log('playback failed due to audio decoding errors');
      }
    });
  });

  const device = useCameraDevice('back', {
    physicalDevices: ['wide-angle-camera'],
  });

  const format = useMemo(
    () => (device != null ? getBestFormat(device, 720, 1000) : undefined),
    [device],
  );

  const {resize} = useResizePlugin();

  const inputTensor = tfModel.model?.inputs[0];
  const inputWidth = inputTensor?.shape[1] ?? 0;
  const inputHeight = inputTensor?.shape[2] ?? 0;

  if (inputTensor != null) {
    console.log(
      `Input: ${inputTensor.dataType} ${inputWidth} x ${inputHeight}`,
    );
  }

  const frameProcessor = useFrameProcessor(
    frame => {
      'worklet';
      if (tfModel.state !== null) {
        runAtTargetFps(
         4,
          () => {
            'worklet';
            const resized = resize(frame, {
              scale: {
                width: inputWidth,
                height: inputHeight,
              },
              pixelFormat: 'rgb',
              dataType: 'uint8',
            });
            const output = tfModel.model.runSync([resized]);
            // const detectedClasses = output[1]
            // Object.values(detectedClasses).forEach(c=>{
            //   console.log('Detected : ',classes[c])
            // })
            // console.log(output[2])
            // console.log(processOutput(output))
            const values = Object.values(output[2]).filter(
              value => value > 0.7,
            );
            console.log(values)
            if (values.length > 0) {
              playSound()
            }
          },
          [tfModel],
        );
      }
    },
    [tfModel],
  );

  const renderCamera = () => {
    const shouldShowCamera =
      device && hasCameraPermission && tfModel.state === 'loaded' && isFocused;
    if (shouldShowCamera) {
      return (
        <Camera
          frameProcessor={frameProcessor}
          device={device}
          style={{flex: 1}}
          isActive={shouldShowCamera}
          format={format}
          pixelFormat={Platform.OS === 'ios' ? 'rgb' : 'yuv'}
        />
      );
    } else {
      return (
        <View style={styles.loaderContainer}>
          <Lottie source={generalImages.loader} autoPlay loop />
        </View>
      );
    }
  };

  return (
    <View style={styles.container}>
      {renderCamera()}
      <View style={styles.header}>
        <TouchableOpacity
          style={styles.iconContainer}
          activeOpacity={0.7}
          onPress={() => logoutRef.current.show()}>
          <Image source={icons.power} style={styles.icon} />
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.iconContainer}
          activeOpacity={0.7}
          onPress={() => props.navigation.navigate('InstructionScreen')}>
          <Image source={icons.questionMark} style={styles.icon} />
        </TouchableOpacity>
      </View>
      <ConfirmationPopup
        reference={logoutRef}
        heading="Logout"
        text="Are you sure you want to logout?"
        onAccept={() => {
          dispatch(setUser(null));
          dispatch(setToken(null));
        }}
      />
    </View>
  );
};

export default CameraScreen;
