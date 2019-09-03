import React, { Component } from 'react';
import { View, ImageBackground, Image } from 'react-native';
import PropTypes from 'prop-types';
import { Images } from '../../themes';
import ButtonWithImage from '../../components/ButtonWithImage';

import styles from './styles';

export default class GameScreen extends Component {

  renderRow = (fieldRow) => {
    return (
      <View style={styles.rowStyle}>
        {
          fieldRow.map((item) => {
            switch (item) {
              case 1: {
                return (
                  <View
                    style={styles.rowItemStyle}
                  >
                    <Image
                      style={styles.imageStyle}
                      resizeMode="contain"
                      source={Images.iconSoldier}
                    />
                  </View>
                );
              }
              case 2: {
                return (
                  <View
                    style={styles.rowItemStyle}
                  >
                    <Image
                      style={styles.imageStyle}
                      resizeMode="contain"
                      source={Images.iconExplosion}
                    />
                  </View>
                );
              }
              case 3: {
                return (
                  <View
                    style={styles.rowItemStyle}
                  >
                    <Image
                      style={styles.imageStyle}
                      resizeMode="contain"
                      source={Images.iconRip}
                    />
                  </View>
                );
              }
              default: {
                return (<View style={styles.rowItemStyle} />);
              }
            }
          })
        }
      </View>
    );
  }

  render() {
    const { goBackPress, playingField } = this.props;
    return (
      <ImageBackground
        style={styles.container}
        source={Images.bgGameScreen}
      >
        <ButtonWithImage
          containerStyle={styles.btnStyle}
          imageStyle={styles.backIcon}
          imageSource={Images.backArrow}
          onPress={goBackPress}
        />
        <View style={styles.contentContainer}>
          <Image
            style={styles.towerImageStyle}
            resizeMode="contain"
            source={Images.towerImage}
          />
          <View style={styles.roadStyle}>
            {
              playingField.map(item => this.renderRow(item))
            }
          </View>
        </View>
      </ImageBackground>
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
