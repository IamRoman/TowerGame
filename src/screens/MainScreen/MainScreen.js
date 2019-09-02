import React, { Component } from 'react';
import { View } from 'react-native';
import PropTypes from 'prop-types';
import ButtonWithText from '../../components/ButtonWithText';
// import { Images } from '../../themes';

import styles from './styles';

export default class MainScreen extends Component {

  render() {
    const { onPressStartGame } = this.props;
    return (
      <View style={styles.container}>
        <ButtonWithText
          title="Start the game"
          containerStyle={styles.btnStyle}
          titleStyle={styles.btnText}
          onPress={onPressStartGame}
        />
      </View>
    );
  }
}

MainScreen.propTypes = {
  onPressStartGame: PropTypes.func,
};

MainScreen.defaultProps = {
  onPressStartGame: () => {},
};
