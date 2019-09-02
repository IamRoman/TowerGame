import React from 'react';
import {
  ActivityIndicator,
  View,
  Modal,
} from 'react-native';
import PropTypes from 'prop-types';
import styles from './styles';

export default class extends React.Component {
  static propTypes = {
    isShowModal: PropTypes.bool,
  };

  static defaultProps = {
    isShowModal: false,
  };

  render() {
    const { isShowModal } = this.props;
    return (
      <Modal
        // animationType="slide"
        onRequestClose={() => null}
        transparent
        visible={isShowModal}
      >
        <View style={styles.modalContent}>
          <ActivityIndicator />
        </View>
      </Modal>
    );
  }
}
