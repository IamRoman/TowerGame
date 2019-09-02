import { createStackNavigator } from 'react-navigation';

import MainScreen from '../screens/MainScreen';
import GameScreen from '../screens/GameScreen';

const MainStack = createStackNavigator(
  {
    Main: MainScreen,
    Game: GameScreen,
  },
  {
    headerMode: 'none',
    initialRouteName: 'Main',
  },
);

export default MainStack;
