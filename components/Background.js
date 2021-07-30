import React, { Component } from 'react';
import { View, Text, StyleSheet, Dimensions } from 'react-native';
import Svg, { Circle } from 'react-native-svg';

const {width, height} = Dimensions.get('window');
// create a component
const Background = () => {
    return (
        <View style={[styles.container,{...StyleSheet.absoluteFill}]}>
            <Svg height="100%" width="100%">
                <Circle cx="-10" cy="0" r="140" fill="#3299BB" />
                <Circle cx={width} cy={height} r="100" fill="#f8991d"/>
            </Svg>
        </View>
    );
};

// define your styles
const styles = StyleSheet.create({
    container: {
      backgroundColor: '#F5FBFF'         
    },
});

//make this component available to the app
export default Background;