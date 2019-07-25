import React, { PureComponent } from 'react';
import { SafeAreaView, StyleSheet } from 'react-native';
import { Provider } from 'mobx-react';
import SplashScreen from 'react-native-splash-screen';

import routes from './routes';
import constants from './Utils/style-guide';

class AppHome extends PureComponent {
  public componentDidMount() {
    SplashScreen.hide();
  }

  public render() {
    const isLoggedIn = false;
    const Routes = routes(isLoggedIn ? 'HomeStack' : 'AuthStack');

    return (
      <Provider>
        <SafeAreaView style={styles.safeArea}>
          <Routes />
        </SafeAreaView>
      </Provider>
    );
  }
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: constants.darkblack,
  },
});

export default AppHome;
