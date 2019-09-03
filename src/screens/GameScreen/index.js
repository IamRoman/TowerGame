import React, { Component } from 'react';
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
    let step = playingField.length - 1;
    const copyPlayingField = [...playingField];
    const game = setInterval(() => {
      if (step === 0) {
        clearInterval(game);
      }
      copyPlayingField[step][0] = 1;
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
