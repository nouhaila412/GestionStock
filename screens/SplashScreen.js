import React,{useEffect} from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  Image,
  View,
  ActivityIndicator
} from 'react-native';
import * as Animatable from 'react-native-animatable';


var bg=require('../assets/Logo.png')
const SplashScreen = ({navigation}) => {
  useEffect(()=>{
    setTimeout(() => {
       /*  navigation.reset({
            index: 0,
            routes: [{ name: 'Login' }],
        }); */
        navigation.navigate('Login')
    }, 2000);
},[]);
  return (
    <View style={styles.container}>
      <Animatable.View animation="fadeInUp" duration={2000} delay={1000}>
      <Image source={bg} style={styles.hello}></Image>
      </Animatable.View>
      <ActivityIndicator 
                size={24}
                color={'#3299BB'}
                style={{marginTop: 190}}
            />
    </View>
  );
};



var styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  hello: {
    height: 150,
    width: 150,
    resizeMode: 'contain',
    marginTop: 150

  }
});

export default SplashScreen;
