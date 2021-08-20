import React,{useEffect} from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  Image,
  View,
  ActivityIndicator
} from 'react-native';


var bg=require('../assets/Logo.png')
const SplashScreen = ({navigation}) => {
  useEffect(()=>{
    setTimeout(() => {
        navigation.reset({
            index: 0,
            routes: [{ name: 'Login' }],
        });
    }, 2000);
},[]);
  return (
    <View style={styles.container}>
      <Image source={bg} style={styles.hello}></Image>
      <ActivityIndicator 
                size={24}
                color={'#3299BB'}
                style={{marginTop: 190}}
            />
    </View>
  );
};


function Grid({ children }) {
  return (
    <div className="grid">
      <LoadingBox>{children}</LoadingBox>
    </div>
  );
}

function LoadingBox({ children }) {
  return React.Children.map(children, child => {
    return <div className="loading-box">{child}</div>;
  });
}
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
