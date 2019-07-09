import {
  createStackNavigator,
  createAppContainer,
  createSwitchNavigator,
} from 'react-navigation';

import Login from './Screens/Login';
import SignUp from './Screens/SignUp';
import Home from './Screens/Home';

const AuthStack = createStackNavigator(
  {
    Login,
    SignUp,
  },
  {
    headerMode: 'none',
  }
);

const HomeStack = createStackNavigator(
  {
    Home,
  },
  {
    headerMode: 'none',
  }
);

const routes = (initialRouteName: string) => {
  return createAppContainer(
    createSwitchNavigator(
      {
        AuthStack,
        HomeStack,
      },
      {
        initialRouteName,
      }
    )
  );
};

export default routes;
