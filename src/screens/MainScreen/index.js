import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import MainScreen from './MainScreen';

class MainScreenContainer extends Component {

  constructor(props) {
    super(props);

    this.state = {
    };
  }

  componentDidMount() {
  }

  goBackPress = () => {
    this.props.navigation.goBack();
  };

  onPressStartGame = () => {
    const { navigation } = this.props;
    navigation.navigate('Game', { data: 123 });
  }

  render() {
    const {
      navigation,
    } = this.props;
    return (
      <MainScreen
        navigation={navigation}
        onPressStartGame={this.onPressStartGame}
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
