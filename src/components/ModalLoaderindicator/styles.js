import { StyleSheet, Dimensions } from 'react-native';

import { Colors } from '../../themes';

const { width, height } = Dimensions.get('window');

const styles = StyleSheet.create({
  modalContent: {
    height,
    width,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: Colors.transparent,
  },
});

export default styles;
