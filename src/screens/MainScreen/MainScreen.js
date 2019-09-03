import React, { Component } from 'react';
import { View, ImageBackground } from 'react-native';
import PropTypes from 'prop-types';
import ButtonWithText from '../../components/ButtonWithText';
import { Images } from '../../themes';

import styles from './styles';

export default class MainScreen extends Component {

  render() {
    const { onPressStartGame } = this.props;
    return (
      <ImageBackground
        style={styles.container}
        source={Images.bgMainScreen}
      >
        <ButtonWithText
          title="Start the game"
          containerStyle={styles.btnStyle}
          titleStyle={styles.btnText}
          onPress={onPressStartGame}
        />
      </ImageBackground>
    );
  }
}

MainScreen.propTypes = {
  onPressStartGame: PropTypes.func,
};

MainScreen.defaultProps = {
  onPressStartGame: () => {},
};
