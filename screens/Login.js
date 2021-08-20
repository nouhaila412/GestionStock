import React, { useContext, useState } from 'react';
import Background from '../components/Background';
import Feather from 'react-native-vector-icons/Feather';


import {
  View,
  Text,
  TouchableOpacity,
  Image,
  Platform,
  StyleSheet,
  ScrollView
} from 'react-native';
import FormInput from '../components/FormInput';
import FormButton from '../components/FormButton';

const LoginScreen = ({navigation}) => {
  
  const [data, setData] = React.useState({
    username: '',
    password: '',
    check_textInputChange: false,
    secureTextEntry: true,
    isValidUser: true,
    isValidPassword: true,
  });
  const textInputChange = (val) => {
    if (val.trim().length >= 4) {
      setData({
        ...data,
        username: val,
        check_textInputChange: true,
        isValidUser: true
      });
    } else {
      setData({
        ...data,
        username: val,
        check_textInputChange: false,
        isValidUser: false
      });
    }
  }

  const handlePasswordChange = (val) => {
    if (val.trim().length >= 8) {
      setData({
        ...data,
        password: val,
        isValidPassword: true
      });
    } else {
      setData({
        ...data,
        password: val,
        isValidPassword: false
      });
    }
  }
  // const { colors } = useTheme();

  const updateSecureTextEntry = () => {
    setData({
      ...data,
      secureTextEntry: !data.secureTextEntry
    });
  }

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Background />
      <Image
        source={require('../assets/Logo.png')}
        style={styles.logo}
      />
      <Text style={styles.text}>RAY-ONE App</Text>
      {/* <Animatable.View
        animation="fadeInUpBig"
        style={[styles.footer, {
          backgroundColor: colors.background
        }]}
      /> */}
      <FormInput
        placeholderText="Username"
        iconType="user"
        keyboardType="email-address"
        autoCapitalize="none"
        autoCorrect={false}
      />

      <FormInput
        placeholderText="Password"
        iconType="lock"
        data
        secureTextEntry={data.secureTextEntry ? true : false}
      />
    <TouchableOpacity
        onPress={updateSecureTextEntry}
      >
        {data.secureTextEntry ?
          <Feather style={styles.eye}
            name="eye-off"
            color="grey"
            size={20}
          />
          :
          <Feather style={styles.eye}
            name="eye"
            color="grey"
            size={20}
          />
        }
      </TouchableOpacity>  
      <FormButton onPress={navigation.navigate('MainMenu')}
        buttonTitle="Se Connecter"
      />

      <TouchableOpacity style={styles.forgotButton} onPress={() => {navigation.navigate('MainMenu') }
      }>
        <Text style={styles.navButtonText}>Forgot Password?</Text>
      </TouchableOpacity>




    </ScrollView>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',  
    padding: 20,
    paddingTop: 70
  },
  logo: {
    height: 200,
    width: 200,
    resizeMode: 'contain',

  },
  text: {
    fontFamily: 'Kufam-SemiBoldItalic',
    fontSize: 28,
    marginBottom: 5,
    marginTop: -5,
    color: '#051d5f',
    justifyContent: 'center',
    alignItems: 'center'
  },
  eye:{
    marginTop: 5,
    
  },
  navButton: {
    marginTop: 15,
  },
  forgotButton: {
    marginVertical: 35,
    marginEnd: 5
  },
  navButtonText: {
    fontSize: 18,
    fontWeight: '500',
    color: '#2e64e5',
    fontFamily: 'Lato-Regular',
    marginBottom: 10
  },
});