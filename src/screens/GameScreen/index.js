import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import GameScreen from './GameScreen';

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
    console.warn('1', this.state.playingField[0]);
  }

  initialPlayingField = () => {
    const { playingField } = this.state;
    for (let i = 0; i < playingField.length; i++) {
      playingField[i] = new Array(3);
    }
  }

  goBackPress = () => {
    this.props.navigation.goBack();
  };

  render() {
    const {
      navigation,
    } = this.props;
    return (
      <GameScreen
        navigation={navigation}
        goBackPress={this.goBackPress}
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
