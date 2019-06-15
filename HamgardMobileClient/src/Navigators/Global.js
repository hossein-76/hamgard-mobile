import { createAppContainer, createStackNavigator, StackActions, NavigationActions } from 'react-navigation';
import Auth from './Authentication';
import JWTController from '../Controllers/AuthenticationController'
import Main from './Main';

const Global = createStackNavigator({
    AuthLoading: JWTController,
    Authentication: Auth,
    MainSession: Main,

  }, {
      initialRouteName: 'AuthLoading',
      headerMode: 'none'

  });




export default createAppContainer(Global);