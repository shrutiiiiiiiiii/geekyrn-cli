import React, { Component } from 'react';
import { TouchableOpacity, StyleSheet, View } from 'react-native';
import { NavigationScreenProp } from 'react-navigation';

import { ScrollView } from 'react-native-gesture-handler';
import Text from '../../Components/Text';
import constants from '../../Utils/style-guide';

interface Props {
  navigation: NavigationScreenProp<{}>;
}

class UserInfo extends Component<Props> {
  public goBack = () => {
    const { navigation } = this.props;
    navigation.goBack();
  };

  public logOut = async () => {
    const { navigation } = this.props;
    navigation.navigate('AuthStack');
  };

  public render() {
    const { navigation } = this.props;
    const email = navigation.getParam('email', 'example@123.com');
    const name = navigation.getParam('name', 'Name');

    return (
      <View style={styles.container}>
        <View style={styles.back}>
          <TouchableOpacity style={styles.backButton} onPress={this.goBack}>
            <Text style={styles.backText}>Back</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.profile}>
          <Text style={styles.name}>{name}</Text>
        </View>
        <ScrollView
          bounces={false}
          contentContainerStyle={styles.scrollViewContent}
          style={styles.bottom}
        >
          <View>
            <Text style={styles.blocktitle}>Email</Text>
            <View style={styles.block}>
              <Text style={styles.blocktext}>{email}</Text>
            </View>
          </View>

          <TouchableOpacity onPress={this.logOut} style={styles.logout}>
            <Text style={styles.blocktext}>Logout</Text>
          </TouchableOpacity>
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: constants.userProfileBG,
  },
  back: {
    width: '100%',
    flex: 0.1,
    paddingLeft: 16,
    justifyContent: 'center',
  },
  backText: {
    color: constants.primaryTextColor,
  },
  backButton: {
    width: 70,
  },
  profile: {
    alignItems: 'center',
    flex: 0.35,
  },
  scrollViewContent: {
    flex: 1,
  },
  bottom: {
    flex: 0.55,
    width: '100%',
    height: '100%',
    position: 'relative',
  },
  name: {
    fontSize: 16,
    textAlign: 'center',
    fontFamily: constants.font.Bold,
    color: constants.primaryTextColor,
    margin: 10,
  },
  block: {
    backgroundColor: constants.themebackground,
    width: '100%',
    paddingLeft: 16,
    paddingBottom: 18,
    paddingTop: 18,
    flexDirection: 'row',
    marginBottom: 1,
    alignItems: 'center',
  },
  blocktitle: {
    fontSize: 14,
    fontFamily: constants.font.Medium,
    color: constants.secondaryTextColor,
    width: '100%',
    padding: 16,
  },
  blocktext: {
    color: constants.secondaryTextColor,
    fontSize: 14,
    fontFamily: constants.font.Medium,
  },
  logout: {
    backgroundColor: constants.themebackground,
    alignItems: 'center',
    flexDirection: 'row',
    padding: 20,
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
  },
});

export default UserInfo;
