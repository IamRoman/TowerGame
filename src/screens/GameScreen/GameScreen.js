import React, { Component } from 'react';
import { View } from 'react-native';
import PropTypes from 'prop-types';
import { Images } from '../../themes';
import ButtonWithImage from '../../components/ButtonWithImage';

import styles from './styles';

export default class GameScreen extends Component {

  render() {
    const { goBackPress } = this.props;
    return (
      <View style={styles.container}>
        <ButtonWithImage
          containerStyle={styles.btnStyle}
          imageStyle={styles.backIcon}
          imageSource={Images.backArrow}
          onPress={goBackPress}
        />
      </View>
    );
  }
}

GameScreen.propTypes = {
  goBackPress: PropTypes.func,
};

GameScreen.defaultProps = {
  goBackPress: () => {},
};
