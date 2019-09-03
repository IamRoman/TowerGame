import { StyleSheet } from 'react-native';
import { Metrics, Colors } from '../../themes';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: Metrics.screenWidth,
  },
  contentContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
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
  rowItemStyle: {
    flex: 1,
    borderWidth: 1,
  },
  rowStyle: {
    flex: 1,
    flexDirection: 'row',
  },
  roadStyle: {
    marginTop: 70,
    height: Metrics.screenWidth,
    width: Metrics.screenWidth - 100,
  },
});

export default styles;
