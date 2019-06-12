import { createAppContainer, createStackNavigator, StackActions, NavigationActions, createDrawerNavigator } from 'react-navigation';
import MainScreen from '../Pages/MainPage';
import Auth from './Authentication';

const MainSession = createStackNavigator({
        Main: MainScreen,
  }, {
      initialRouteName: 'Main',
      headerMode: 'screen',
    
  });

const Drawer = createDrawerNavigator(
    {
        Exit : Auth,
    }
);


export default MainSession;