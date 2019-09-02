import React, { Component } from 'react';
import { connect } from 'react-redux';
import { SafeAreaView, View, StatusBar } from 'react-native';
import AppContainer from '../navigation/MainNavigation';

import styles from './RootContainerStyles';
import { Colors } from '../themes';


class RootContainer extends Component {
  render() {
    return (
      <SafeAreaView style={styles.safeArea}>
        <StatusBar
          translucent
          barStyle="dark-content"
          backgroundColor={Colors.transparent}
        />
        <View style={styles.rootStackStyle}>
          <AppContainer />
        </View>
      </SafeAreaView>
    );
  }
}

const mapStateToProps = state => ({
});

const mapDispatchToProps = dispatch => ({
});

export default connect(mapStateToProps, mapDispatchToProps)(RootContainer);
