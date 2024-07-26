import React, {useImperativeHandle, useRef, useState} from 'react';
import {
  View,
  TextInput,
  Image,
  TouchableOpacity,
  Text,
  Platform,
} from 'react-native';

import {icons} from '../../assets';
import {colors} from '../../utils/theme';
import {vh} from '../../utils/units';
import SourceSansProSemiBold from '../Wrappers/Text/SourceSansProSemiBold';
import styles from './styles';

const CustomTextInput = ({
  label,
  style,
  password,
  keyboardType,
  onSubmitEditing,
  reference,
  required,
  returnKeyType,
  value,
  onChangeText,
  ...props
}) => {
  const [secure, setSecure] = useState(true);
  const inputRef = useRef(null);

  useImperativeHandle(reference, () => ({
    focus: focus,
    blur: blur,
  }));

  const focus = () => {
    inputRef?.current?.focus();
  };

  const blur = () => {
    inputRef?.current?.blur();
  };

  return (
    <View style={[styles.container, label && {marginVertical: vh * 1}]}>
      {label && (
        <View style={styles.labelRow}>
          <SourceSansProSemiBold style={styles.label}>
            {label}
          </SourceSansProSemiBold>
          {required && <Text style={styles.star}>*</Text>}
        </View>
      )}

      <View
        style={[
          styles.whiteContainer,
          Platform.OS == 'android' && {paddingVertical: vh * 0.5},
        ]}>
        <TextInput
          {...props}
          onChangeText={onChangeText}
          style={[styles.input, style]}
          secureTextEntry={secure && password}
          keyboardType={keyboardType}
          returnKeyType={returnKeyType}
          onSubmitEditing={onSubmitEditing}
          ref={inputRef}
          placeholderTextColor={colors.gray}
          value={value}
        />

        {password && (
          <TouchableOpacity onPress={() => setSecure(!secure)}>
            <Image
              source={secure ? icons.eyeOff : icons.eye}
              style={styles.icon}
            />
          </TouchableOpacity>
        )}
      </View>
    </View>
  );
};

export default CustomTextInput;
