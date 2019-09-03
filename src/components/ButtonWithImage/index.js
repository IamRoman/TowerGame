import React from 'react';
import { TouchableOpacity, Image } from 'react-native';
import PropTypes from 'prop-types';

import styles from './styles';
import images from '../../themes/Images';

const ButtonWithImage = ({
  containerStyle,
  imageStyle,
  imageSource,
  resizeMode,
  disabled,
  onPress,
}) => (
  <TouchableOpacity
    style={[styles.container, containerStyle]}
    disabled={disabled}
    onPress={onPress}
  >
    <Image
      style={[styles.image, imageStyle]}
      resizeMode={resizeMode}
      source={imageSource}
    />
  </TouchableOpacity>
);

ButtonWithImage.propTypes = {
  disabled: PropTypes.bool,
  containerStyle: PropTypes.object,
  resizeMode: PropTypes.string,
  imageSource: PropTypes.oneOfType([PropTypes.number, PropTypes.object]),
  imageStyle: PropTypes.oneOfType([PropTypes.array, PropTypes.object]),
  onPress: PropTypes.func,
};
ButtonWithImage.defaultProps = {
  disabled: false,
  resizeMode: 'contain',
  containerStyle: {},
  imageSource: images.menu_icon,
  imageStyle: {},
  onPress: () => {},
};

export default ButtonWithImage;
