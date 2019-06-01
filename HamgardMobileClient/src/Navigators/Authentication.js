import { createAppContainer, createStackNavigator, StackActions, NavigationActions } from 'react-navigation';
import ArrivalScreen from '../Pages/Arrival';
import LoginScreen from '../Pages/Login';
import SignUpScreen from '../Pages/SignUp';

const Authentication = createStackNavigator({
    Arrival: ArrivalScreen,
    Login: LoginScreen,
    SignUp: SignUpScreen
  }, {
      initialRouteName: 'Arrival',
  });




export default createAppContainer(Authentication);