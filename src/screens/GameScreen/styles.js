import { StyleSheet, Platform } from 'react-native';
import { Metrics, Colors } from '../../themes';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: Metrics.screenWidth,
  },
  contentContainer: {
    flex: 1,
    alignItems: 'center',
  },
  btnStyle: {
    marginTop: Platform.OS === 'ios' ? 0 : 20,
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
    justifyContent: 'center',
    alignItems: 'center',
  },
  rowStyle: {
    flex: 1,
    flexDirection: 'row',
  },
  roadStyle: {
    height: Metrics.screenWidth,
    width: Metrics.screenWidth - 100,
  },
  imageStyle: {
    height: 40,
    width: 40,
  },
  towerImageStyle: {
    height: 120,
    width: 70,
  },
});

export default styles;
