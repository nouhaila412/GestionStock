import React from 'react';
import { BackHandler, Alert } from 'react-native';

const Logout = () => {
    return(
        Alert.alert(
            'Exit App',
            'Do you want to exit?',
            [
              {text: 'No', onPress: () => console.log('Cancel Pressed'), style: 'cancel'},
              {text: 'Yes', onPress: () => BackHandler.exitApp()},
            ],
    )
    );
}
export default Logout;