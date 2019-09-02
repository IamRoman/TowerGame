import { StyleSheet } from 'react-native';
import { Metrics, Colors } from '../../themes';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: Metrics.screenWidth,
  },
  btnStyle: {
    height: 44,
    width: 50,
    justifyContent: 'center',
    alignItems: 'center',
  },
  backIcon: {
    width: 10,
    height: 18,
    tintColor: Colors.black,
  },
});

export default styles;
