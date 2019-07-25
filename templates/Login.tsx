import React, { Component } from 'react';
import {
  StyleSheet,
  TouchableOpacity,
  View,
  Platform,
  StatusBar,
} from 'react-native';
import * as Yup from 'yup';
import { FormikProps, Formik } from 'formik';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { NavigationScreenProp } from 'react-navigation';

import TextWrapper from '../../Components/Text';
import TextInputWrapper from '../../Components/TextInput';
import constants from '../../Utils/style-guide';

interface Values {
  password: string;
  email: string;
}

interface LoginProps {
  navigation: NavigationScreenProp<{}>;
}

class Login extends Component<LoginProps & FormikProps<Values>> {
  public onSignIn = (values: Values) => {
    const { navigation } = this.props;
    const { email, password } = values;
    navigation.navigate('Home', { email, password });
  };

  public render() {
    return (
      <Formik
        initialValues={{
          email: __DEV__ ? 'p1@mailinator.com' : '',
          password: __DEV__ ? 'qwerty123@' : '',
        }}
        onSubmit={this.onSignIn}
        validationSchema={Yup.object().shape({
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
              'Password should have one number and one special characters and atleast 8 charecters'
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

          const setEmailField = () => {
            setFieldTouched('email');
          };

          const setPasswordField = () => {
            setFieldTouched('password');
          };

          return (
            <KeyboardAwareScrollView
              testID="Login container"
              contentContainerStyle={styles.container}
              bounces={false}
              style={styles.styleContainer}
            >
              <StatusBar barStyle={'light-content'} backgroundColor={'black'} />
              <View testID="Login head" style={styles.head}>
                <TouchableOpacity testID="Login go back button">
                  <TextWrapper style={styles.text}>Back</TextWrapper>
                </TouchableOpacity>
              </View>
              <View testID="Login show content view" style={styles.showContent}>
                <View testID="Login sign in" style={styles.welcomeContainer}>
                  <TextWrapper
                    testID="Login sign in text"
                    style={styles.welcome}
                  >
                    Sign in
                  </TextWrapper>
                </View>
                <View testID="Login form" style={styles.form}>
                  <View testID="Login form first half" style={styles.firstHalf}>
                    <TextInputWrapper
                      testID="Login email text"
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
                        testID="Login email error"
                        style={styles.errors}
                      >
                        {errors.email}
                      </TextWrapper>
                    )}
                    <TextInputWrapper
                      testID="Login password text"
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
                        testID="Login password email"
                        style={styles.errors}
                      >
                        {errors.password}
                      </TextWrapper>
                    )}
                    <View>
                      <TouchableOpacity testID="Login forgot password button">
                        <View
                          testID="Login forgot password view"
                          style={styles.forgotPasswordContainer}
                        >
                          <TextWrapper
                            testID="Login forgot password text"
                            style={styles.forgotPassword}
                          >
                            Forgot Password
                          </TextWrapper>
                        </View>
                      </TouchableOpacity>
                    </View>
                  </View>

                  <View
                    testID="Login form second half"
                    style={styles.secondHalf}
                  >
                    <TouchableOpacity
                      testID="Login sign in button"
                      onPress={onPasswordSumbitEditing}
                    >
                      <View
                        testID="Login sign in view"
                        style={styles.signInBtn}
                      >
                        <TextWrapper
                          testID="Login sign in text"
                          style={styles.signInText}
                        >
                          Sign in
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
  styleContainer: {
    backgroundColor: constants.darkblack,
    flex: 1,
  },
  container: {
    flex: 1,
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
    color: constants.primaryTextColor,
    width: '100%',
    paddingHorizontal: 20,
    paddingVertical: 10,
    marginTop: 40,
    borderBottomWidth: 1,
    fontSize: 15,
  },
  firstHalf: {
    flex: 0.6,
    justifyContent: 'center',
    width: '100%',
  },
  secondHalf: {
    width: '100%',
    flex: 0.4,
  },
  signInBtn: {
    backgroundColor: constants.primarycolor,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 30,
    padding: 15,
  },
  signInText: {
    fontFamily: constants.font.Medium,
    color: constants.themebackground,
    fontSize: 15,
  },
  forgotPassword: {
    color: constants.primaryTextColor,
    fontSize: 15,
  },
  forgotPasswordContainer: {
    justifyContent: 'center',
    alignItems: 'flex-end',
    padding: 10,
  },
  errors: {
    fontFamily: constants.font.Medium,
    fontSize: 15,
    color: constants.secondarycolor,
    alignSelf: 'flex-end',
  },
});

export default Login;
