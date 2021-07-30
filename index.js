/**
 * @format
 */
import React, {Component} from 'react';
import {AppRegistry} from 'react-native';
import LoginScreen from './screens/Login'
import SplashScreen from './screens/SplashScreen';
import {name as appName} from './app.json';

/* AppRegistry.registerComponent(appName, () => LoginScreen

); */
class Main extends Component {
    constructor(props){
        super(props);
        this.state = { currentScreen: 'SplashScreen'};
        setTimeout(()=>{
            this.setState({ currentScreen: 'LoginScreen'})
        }, 4000)
    }
    render() {
        const { currentScreen } = this.state
        let mainScreen = currentScreen === 'SplashScreen' ? <SplashScreen /> : <LoginScreen/>
        return mainScreen
    }
}
AppRegistry.registerComponent(appName, () => Main);