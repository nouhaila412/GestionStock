import React, {useContext, useState} from 'react';
import Background from '../components/Background';
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
import SocialButton from '../components/SocialButton';

const LoginScreen = () => {
  sayHelle =()=>{
         alert("hello")
  }
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Background />
      <Image
        source={require('../assets/Logo.png')}
        style={styles.logo}
      />
      <Text style={styles.text}>RAY-ONE App</Text>

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
        secureTextEntry={true}
      />

      <FormButton onPress={this.sayHelle}
        buttonTitle="Se Connecter"
      />

      <TouchableOpacity style={styles.forgotButton} onPress={() =>{}
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