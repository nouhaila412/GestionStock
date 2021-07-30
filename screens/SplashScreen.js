import React from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  Image,
  View
} from 'react-native';
import ThreeDotsWave from '../components/ThreeDotsWave';

var bg=require('../assets/Logo.png')
const SplashScreen = () => {
  return (
    <View style={styles.container}>
      <Image source={bg} style={styles.hello}></Image>
      <Grid>
        <ThreeDotsWave/>
      </Grid>
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

  }
});

export default SplashScreen;
