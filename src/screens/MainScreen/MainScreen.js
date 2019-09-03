import React, { Component } from 'react';
import { ImageBackground } from 'react-native';
import PropTypes from 'prop-types';
import RadioForm from 'react-native-simple-radio-button';
import ButtonWithText from '../../components/ButtonWithText';
import { Images, Colors } from '../../themes';

import styles from './styles';

export default class MainScreen extends Component {

  render() {
    const {
      onPressStartGame,
      setSelectedBot,
      botsTypes,
    } = this.props;
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
        <RadioForm
          radio_props={botsTypes}
          initial={0}
          style={styles.radioFormStyle}
          formHorizontal={false}
          buttonSize={10}
          buttonColor={Colors.grey}
          selectedButtonColor={Colors.green}
          animation
          onPress={setSelectedBot}
        />
      </ImageBackground>
    );
  }
}

MainScreen.propTypes = {
  onPressStartGame: PropTypes.func,
  setSelectedBot: PropTypes.func.isRequired,
  botsTypes: PropTypes.array.isRequired,
};

MainScreen.defaultProps = {
  onPressStartGame: () => {},
};
