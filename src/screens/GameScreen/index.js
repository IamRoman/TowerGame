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
    const { navigation } = this.props;
    const bot = navigation.getParam('selectedBotIndex');
    const step = bot === 2 ? 2 : 1; // botA - 0, botB - 1, botC - 2
    let distance = bot === 1 ? playingField.length / 2 : playingField.length;
    const copyPlayingField = [...playingField];
    const game = setInterval(() => {
      if (distance === 0) {
        Alert.alert('Enemies win');
        clearInterval(game);
      }
      if (distance > 0) {
        copyPlayingField[distance - 1][bot] = 1;
        if (distance <= 5) {
          const towerShot = _.random(0, 2);
          copyPlayingField[distance][towerShot] = 2;
          if (towerShot === bot) {
            Alert.alert('Tower win');
            copyPlayingField[distance - 1][bot] = 3;
            clearInterval(game);
          }
        }
      }
      if (distance < playingField.length) {
        if (step === 1) {
          copyPlayingField[distance][bot] = null;
        } else {
          copyPlayingField[distance + 1][bot] = null;
        }
      }
      this.setState({ playingField: copyPlayingField });
      distance-= step;
    }, tick);
  }

  initialPlayingField = () => {
    const { playingField } = this.state;
    for (let i = 0; i < playingField.length; i++) {
      playingField[i] = [null, null, null];
    }
  }

  goBackPress = () => {
    this.props.navigation.goBack();
  };

  render() {
    const { navigation } = this.props;
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
