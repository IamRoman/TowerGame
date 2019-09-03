import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import MainScreen from './MainScreen';

class MainScreenContainer extends Component {

  constructor(props) {
    super(props);

    this.state = {
      botsTypes: [
        { label: 'BotA distance 100 m/speed 10', value: 0 },
        { label: 'BotB distance 50 m/speed 10', value: 1 },
        { label: 'BotC distance 100 m/speed 20', value: 2 },
      ],
    };
    this.selectedBotIndex = 0;
  }

  componentDidMount() {
  }

  goBackPress = () => {
    this.props.navigation.goBack();
  };

  onPressStartGame = () => {
    const { navigation } = this.props;
    navigation.navigate('Game', { selectedBotIndex: this.selectedBotIndex });
  }

  setSelectedBot = (index) => {
    this.selectedBotIndex = index;
  }

  render() {
    const {
      navigation,
    } = this.props;
    const { botsTypes } = this.state;
    return (
      <MainScreen
        navigation={navigation}
        onPressStartGame={this.onPressStartGame}
        botsTypes={botsTypes}
        setSelectedBot={this.setSelectedBot}
      />);
  }
}

MainScreenContainer.propTypes = {
  navigation: PropTypes.object,
};

MainScreenContainer.defaultProps = {
  navigation: {},
};

const mapStateToProps = state => ({
});

const mapDispatchToProps = dispatch => ({
});

export default connect(mapStateToProps, mapDispatchToProps)(MainScreenContainer);
