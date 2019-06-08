import { createAppContainer, createStackNavigator, StackActions, NavigationActions, createDrawerNavigator } from 'react-navigation';
import MainScreen from '../Pages/MainPage';

const MainSession = createStackNavigator({
        Main: MainScreen,
  }, {
      initialRouteName: 'Main',
      headerMode: 'screen'
    
  });




export default MainSession;