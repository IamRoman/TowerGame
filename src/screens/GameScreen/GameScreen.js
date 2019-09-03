import React, { Component } from 'react';
import { View, Text } from 'react-native';
import PropTypes from 'prop-types';
import { Images, Metrics } from '../../themes';
import ButtonWithImage from '../../components/ButtonWithImage';

import styles from './styles';

export default class GameScreen extends Component {

  renderRow = (fieldRow) => {
    return (
      <View style={styles.rowStyle}>
        {
          fieldRow.map((item) => {
            if (item) {
              return (
                <View
                  style={styles.rowItemStyle}
                >
                  <Text>1</Text>
                </View>
              );
            }
            return (
              <View
                style={styles.rowItemStyle}
              >
                <Text>0</Text>
              </View>);
          })
        }
      </View>
    );
  }

  render() {
    const { goBackPress, playingField } = this.props;
    return (
      <View style={styles.container}>
        <ButtonWithImage
          containerStyle={styles.btnStyle}
          imageStyle={styles.backIcon}
          imageSource={Images.backArrow}
          onPress={goBackPress}
        />
        <View style={styles.contentContainer}>
          <View style={styles.roadStyle}>
            {
              playingField.map(item => this.renderRow(item))
            }
          </View>
        </View>
      </View>
    );
  }
}

GameScreen.propTypes = {
  goBackPress: PropTypes.func,
  playingField: PropTypes.array,
};

GameScreen.defaultProps = {
  goBackPress: () => {},
  playingField: [],
};
