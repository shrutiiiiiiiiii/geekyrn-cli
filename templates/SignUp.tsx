import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  TouchableOpacity,
  Platform,
  StatusBar,
} from 'react-native';
import * as Yup from 'yup';
import { Formik, FormikProps } from 'formik';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { NavigationScreenProp } from 'react-navigation';

import TextWrapper from '../../Components/Text';
import TextInputWrapper from '../../Components/TextInput';
import constants from '../../Utils/style-guide';

interface Values {
  name: string;
  password: string;
  email: string;
}

interface SignUpProps {
  navigation: NavigationScreenProp<{}>;
}

class Signup extends Component<SignUpProps & FormikProps<Values>> {
  public onSignUp = (values: Values) => {
    const { navigation } = this.props;
    const { email, password, name } = values;
    navigation.navigate('Home', { email, password, name });
  };

  public setNameField = () => {};

  public render() {
    return (
      <Formik
        initialValues={{
          name: __DEV__ ? 'Geekyants' : '',
          email: __DEV__ ? 'geekyants@mailinator.com' : '',
          password: __DEV__ ? 'qwerty123@' : '',
        }}
        onSubmit={this.onSignUp}
        validationSchema={Yup.object().shape({
          name: Yup.string().required('Name is required!'),
          email: Yup.string()
            .matches(/^[^+]/, 'Special characters not allowed in phone number')
            .test(
              'email or phone number',
              'Invalid email or phone number',
              value => {
                const email = new RegExp(
                  //eslint-disable-next-line
                  /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
                );
                if (email.test(value)) {
                  return true;
                } else {
                  const phNo = new RegExp(/^[1-9]([0-9]{9,11})$/);
                  return phNo.test(value);
                }
              }
            )
            .required('Email or phone number required'),

          password: Yup.string()
            .min(
              8,
              'Password should have one number and one special characters and atleast 8 characters'
            )
            .test(
              'special Charecters',
              'Password should have one number and one special characters and atleast 8 characters',
              value => {
                const pattern = new RegExp(/[_*@!#%&()^~{},./<>?;':"]+/);
                return pattern.test(value);
              }
            )
            .test(
              'numbers ',
              'Password should have one number and one special character and atleast 8 characters',
              value => {
                const pattern = new RegExp(/[0-9]+/);
                return pattern.test(value);
              }
            )
            .required('Password is required'),
        })}
      >
        {({
          values,
          handleChange,
          errors,
          setFieldTouched,
          touched,
          handleSubmit,
        }) => {
          const onPasswordSumbitEditing = () => {
            handleSubmit();
          };

          const setNameField = () => {
            setFieldTouched('name');
          };

          const setEmailField = () => {
            setFieldTouched('email');
          };

          const setPasswordField = () => {
            setFieldTouched('password');
          };

          return (
            <KeyboardAwareScrollView
              testID="SignUp container"
              contentContainerStyle={styles.container}
              style={styles.container}
              bounces={false}
            >
              <StatusBar barStyle={'light-content'} backgroundColor={'black'} />
              <View testID="SignUp head" style={styles.head}>
                <TouchableOpacity testID="SignUp go back button">
                  <TextWrapper style={styles.text}>Back</TextWrapper>
                </TouchableOpacity>
              </View>
              <View
                testID="SignUp show content view"
                style={styles.showContent}
              >
                <View testID="SignUp sign up" style={styles.welcomeContainer}>
                  <TextWrapper
                    testID="SignUp create account text"
                    style={styles.welcome}
                  >
                    Create an Account
                  </TextWrapper>
                </View>
                <View testID="SignUp form" style={styles.form}>
                  <View
                    testID="SignUp form first half"
                    style={styles.firstHalf}
                  >
                    <TextInputWrapper
                      testID="SignUp name text"
                      style={[
                        styles.textInput,
                        {
                          borderBottomColor:
                            touched.name && errors.name
                              ? constants.secondarycolor
                              : constants.secondaryTextColor,
                        },
                      ]}
                      value={values.name}
                      onChangeText={handleChange('name')}
                      onBlur={setNameField}
                      placeholder="Name"
                      placeholderTextColor={constants.secondaryTextColor}
                      returnKeyType={'next'}
                    />
                    {touched.name && errors.name && (
                      <TextWrapper
                        testID="SignUp name error"
                        style={styles.errors}
                      >
                        {errors.name}
                      </TextWrapper>
                    )}
                    <TextInputWrapper
                      testID="SignUp email text"
                      style={[
                        styles.textInput,
                        {
                          borderBottomColor:
                            touched.email && errors.email
                              ? constants.secondarycolor
                              : constants.secondaryTextColor,
                        },
                      ]}
                      value={values.email}
                      onChangeText={handleChange('email')}
                      onBlur={setEmailField}
                      placeholder="Email or Phone No with Country Code"
                      placeholderTextColor={constants.secondaryTextColor}
                      autoCapitalize="none"
                      returnKeyType={'next'}
                    />
                    {touched.email && errors.email && (
                      <TextWrapper
                        testID="SignUp email error"
                        style={styles.errors}
                      >
                        {errors.email}
                      </TextWrapper>
                    )}
                    <TextInputWrapper
                      testID="SignUp password text"
                      style={[
                        styles.textInput,
                        {
                          borderBottomColor:
                            touched.password && errors.password
                              ? constants.secondarycolor
                              : constants.secondaryTextColor,
                        },
                      ]}
                      value={values.password}
                      onChangeText={handleChange('password')}
                      onBlur={setPasswordField}
                      placeholder="Password"
                      placeholderTextColor={constants.secondaryTextColor}
                      secureTextEntry={true}
                      autoCapitalize="none"
                      returnKeyType={'send'}
                    />
                    {touched.password && errors.password && (
                      <TextWrapper
                        testID="SignUp password error"
                        style={styles.errors}
                      >
                        {errors.password}
                      </TextWrapper>
                    )}
                  </View>
                  <View
                    testID="SignUp form second half"
                    style={styles.secondHalf}
                  >
                    <TouchableOpacity
                      testID="SignUp sign up button"
                      onPress={onPasswordSumbitEditing}
                    >
                      <View
                        testID="SignUp sign up view"
                        style={styles.signUpBtn}
                      >
                        <TextWrapper
                          testID="SignUp sign up text"
                          style={styles.signUpText}
                        >
                          Sign up
                        </TextWrapper>
                      </View>
                    </TouchableOpacity>
                  </View>
                </View>
              </View>
            </KeyboardAwareScrollView>
          );
        }}
      </Formik>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: constants.darkblack,
  },
  head: {
    height: Platform.OS === 'ios' ? 35 : 47,
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignContent: 'center',
    marginHorizontal: 20,
  },
  text: {
    color: constants.primaryTextColor,
  },
  showContent: {
    flex: 1,
    paddingHorizontal: 30,
    backgroundColor: constants.darkblack,
  },
  welcomeContainer: {
    flex: 0.25,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  welcome: {
    fontFamily: constants.font.Bold,
    textAlign: 'center',
    marginHorizontal: 20,
    color: constants.primaryTextColor,
    fontSize: 35,
    justifyContent: 'center',
    alignItems: 'center',
  },
  form: {
    flex: 0.7,
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  textInput: {
    fontFamily: constants.font.Medium,
    fontWeight: '400',
    color: constants.primaryTextColor,
    width: '100%',
    paddingHorizontal: 20,
    paddingVertical: 10,
    marginTop: '10%',
    borderBottomWidth: 1,
    fontSize: 17,
  },
  errors: {
    fontFamily: constants.font.Medium,
    fontSize: 15,
    color: constants.secondarycolor,
    alignSelf: 'flex-end',
  },
  signUpBtn: {
    backgroundColor: constants.primarycolor,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 30,
    padding: 10,
    marginTop: 25,
    marginBottom: 16,
  },
  signUpText: {
    fontFamily: constants.font.Medium,
    color: constants.themebackground,
    fontSize: 15,
  },
  firstHalf: {
    flex: 0.6,
    justifyContent: 'center',
    width: '100%',
  },
  secondHalf: { width: '100%', flex: 0.4 },
});

export default Signup;
