import React from 'react';
import { TouchableOpacity, Text } from 'react-native';
import PropTypes from 'prop-types';

import { Colors } from '../../themes';

import styles from './styles';

const ButtonWithText = ({
  title,
  width,
  height,
  marginBottom,
  backgroundColor,
  fontSize,
  color,
  disabled,
  containerStyle,
  titleStyle,
  onPress,
}) => (
  <TouchableOpacity
    style={[
      styles.container,
      {
        width,
        height,
        marginBottom,
        backgroundColor,
      },
      containerStyle,
      disabled && styles.disabled,
    ]}
    disabled={disabled}
    onPress={onPress}
  >
    <Text
      style={[styles.title, { color, fontSize }, titleStyle]}
      numberOfLines={1}
      ellipsizeMode="tail"
    >
      {title}
    </Text>
  </TouchableOpacity>
);

ButtonWithText.propTypes = {
  title: PropTypes.string.isRequired,
  width: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  height: PropTypes.number,
  marginBottom: PropTypes.number,
  backgroundColor: PropTypes.string,
  fontSize: PropTypes.number,
  color: PropTypes.string,
  disabled: PropTypes.bool,
  containerStyle: PropTypes.oneOfType([PropTypes.array, PropTypes.object]),
  titleStyle: PropTypes.object,
  onPress: PropTypes.func,
};

ButtonWithText.defaultProps = {
  width: 100,
  height: 50,
  marginBottom: 0,
  backgroundColor: Colors.green,
  fontSize: 12,
  color: Colors.white,
  disabled: false,
  containerStyle: {},
  titleStyle: {},
  onPress: () => {},
};

export default ButtonWithText;
