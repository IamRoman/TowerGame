import React, { Component } from 'react';
import { Alert } from 'react-native';
import _ from 'lodash';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import GameScreen from './GameScreen';

const tick = 500;

class GameScreenContainer extends Component {

  constructor(props) {
    super(props);

    this.state = {
      playingField: new Array(10),
    };
  }

  componentWillMount() {
    this.initialPlayingField();
  }

  componentDidMount() {
    this.startGameProcess();
  }

  startGameProcess = () => {
    const { playingField } = this.state;
    const botA = 0;
    let step = playingField.length - 1;
    const copyPlayingField = [...playingField];
    const game = setInterval(() => {
      if (step === 0) {
        Alert.alert('Enemies win');
        clearInterval(game);
      }
      copyPlayingField[step][0] = 1;
      if (step <= 5) {
        const towerShot = _.random(0, 2);
        copyPlayingField[step][towerShot] = 2;
        if (towerShot === botA) {
          Alert.alert('Tower win');
          copyPlayingField[step][0] = 3;
          clearInterval(game);
        }
      }
      if (step < playingField.length - 1) {
        copyPlayingField[step + 1][0] = null;
      }
      this.setState({ playingField: copyPlayingField });
      step--;
    }, tick);
  }

  initialPlayingField = () => {
    const { playingField } = this.state;
    for (let i = 0; i < playingField.length; i++) {
      playingField[i] = [null, null, null];
    }
  }

  // clearFieldItems = (playingField) => {
  //   const copyPlayingField = [...playingField];
  //   for (let i = 0; i < playingField.length; i++) {
  //     copyPlayingField[i] === [...null, null, null];
  //   }
  //   return copyPlayingField;
  // }

  goBackPress = () => {
    this.props.navigation.goBack();
  };

  render() {
    const {
      navigation,
    } = this.props;
    const { playingField } = this.state;
    return (
      <GameScreen
        navigation={navigation}
        goBackPress={this.goBackPress}
        playingField={playingField}
      />);
  }
}

GameScreenContainer.propTypes = {
  navigation: PropTypes.object,
};

GameScreenContainer.defaultProps = {
  navigation: {},
};

const mapStateToProps = state => ({
});

const mapDispatchToProps = dispatch => ({
});

export default connect(mapStateToProps, mapDispatchToProps)(GameScreenContainer);
