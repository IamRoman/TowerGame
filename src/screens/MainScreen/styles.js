import { StyleSheet } from 'react-native';
import { Metrics, Colors } from '../../themes';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: Metrics.screenWidth,
    justifyContent: 'center',
    alignItems: 'center',
  },
  btnStyle: {
    height: 50,
    width: 100,
    backgroundColor: Colors.green,
    borderRadius: 5,
  },
  btnText: {
    fontSize: 12,
    color: Colors.black,
  },
});

export default styles;
