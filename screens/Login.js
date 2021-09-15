import React, { useContext, useState } from 'react';
import Background from '../components/Background';
import Feather from 'react-native-vector-icons/Feather';
import {windowHeight, windowWidth} from '../utils/Dimentions';
import { Root, Popup } from 'popup-ui'

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
      <Text style={styles.text}>Gestion de Stock</Text>
      
      <FormInput
        placeholderText="Nom d'utilisateur"
        iconType="user"
        keyboardType="email-address"
        autoCapitalize="none"
        autoCorrect={false}
      />

      <FormInput
        placeholderText="Mot de passe"
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
      
          <TouchableOpacity style={styles.buttonContainer} onPress={()=>{
                       navigation.navigate('MainMenu')
                    }}>
      <Text style={styles.buttonText}>Se Connecter</Text>
    </TouchableOpacity>
      
        
        
      

      <TouchableOpacity style={styles.forgotButton}>
        <Text style={styles.navButtonText}>Mot de passe oublié ?</Text>
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
    paddingTop: 40,
    height: 800
  },
  logo: {
    height: 200,
    width: 200,
    resizeMode: 'contain',
    marginTop: -80

  },
  text: {
    fontFamily: 'Kufam-SemiBoldItalic',
    fontSize: 28,
    marginBottom: 5,
    marginTop: -35,
    color: '#051d5f',
    justifyContent: 'center',
    alignItems: 'center'
  },
  eye:{
    marginTop: -15,
    marginStart: 270
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
    marginBottom: -10,
    marginStart: 130,
    textDecorationLine: 'underline'
  },buttonContainer: {
    marginTop: 70,
    width: '100%',
    height: windowHeight / 15,
    backgroundColor: '#2e64e5',
    padding: 10,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 3,
  },
  buttonText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#ffffff',
    fontFamily: 'Lato-Regular',
  },
});