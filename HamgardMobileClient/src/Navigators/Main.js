import { createAppContainer, createStackNavigator, StackActions, NavigationActions, createDrawerNavigator } from 'react-navigation';
import MainScreen from '../Pages/MainPage';
import GroupCreationScreen from '../Pages/GroupCreation';
import Auth from './Authentication';
import GroupMainScreen from '../Pages/GroupMainPage'

const MainSession = createStackNavigator({
        Main: MainScreen,
        GroupCreation: GroupCreationScreen,
        Group: GroupMainScreen 
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