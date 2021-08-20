import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import LoginScreen from '../screens/Login';
import Design from '../screens/MainScreen';
import Logout from '../screens/Logout';

const Tab = createBottomTabNavigator();

const CustomTabBarButton = ({ children, onPress }) => (
    <TouchableOpacity
        style={{
            top: -30,
            justifyContent: 'center',
            alignItems: 'center',
            ...styles.shadow
        }}
        onPress={onPress}
    >
        <View style={{
            width: 70,
            height: 70,
            borderRadius: 35,
            backgroundColor: '#3299BB'
        }}>
            {children}
        </View>
    </TouchableOpacity>
);
const Tabs = () => {
    return (
        <Tab.Navigator
            tabBarOptions={{
                showLabel: false,
                style: {
                    position: 'absolute',
                    bottom: 25,
                    left: 20,
                    right: 20,
                    elevation: 0,
                    backgroundColor: '#ffffff',
                    borderRadius: 15,
                    height: 90,
                    ...styles.shadow

                }
            }}
        >
            <Tab.Screen name="Home" component={Design} options={{
                tabBarIcon: ({ focused }) => (
                    <View style={{ alignItems: 'center', justifyContent: 'center', top: 10 }}>
                        <Image
                            source={require('../assets/icons/home.png')}
                            resizeMode="contain"
                            style={{
                                width: 25,
                                height: 25,
                                tintColor: focused ? '#f8991d' : '#748c94',
                            }}
                        />
                        <Text
                            style={{ color: focused ? '#f8991d' : '#748c94', fontSize: 12 }}
                        >HOME</Text>
                    </View>
                )
            }} />
            <Tab.Screen name="Account" component={LoginScreen} options={{
                tabBarIcon: ({ focused }) => (
                    <View style={{ alignItems: 'center', justifyContent: 'center', top: 10 }}>
                        <Image
                            source={require('../assets/icons/find.png')}
                            resizeMode="contain"
                            style={{
                                width: 25,
                                height: 25,
                                tintColor: focused ? '#f8991d' : '#748c94',
                            }}
                        />
                        <Text
                            style={{ color: focused ? '#f8991d' : '#748c94', fontSize: 12 }}
                        >Find</Text>
                    </View>
                )
            }} />
            <Tab.Screen name="Post" component={LoginScreen} options={{
                tabBarIcon: ({ focused }) => (
                    <Image
                        source={require('../assets/icons/info.png')}
                        resizeMode="contain"
                        style={{
                            width: 40,
                            height: 40,
                            tintColor: '#fff',
                        }}
                    />
                ),
                tabBarButton: (props) => (
                    <CustomTabBarButton {...props} />
                )
            }} />
            <Tab.Screen name="Seetings" component={LoginScreen} options={{
                tabBarIcon: ({ focused }) => (
                    <View style={{ alignItems: 'center', justifyContent: 'center', top: 10 }}>
                        <Image
                            source={require('../assets/icons/settings.png')}
                            resizeMode="contain"
                            style={{
                                width: 25,
                                height: 25,
                                tintColor: focused ? '#f8991d' : '#748c94',
                            }}
                        />
                        <Text
                            style={{ color: focused ? '#f8991d' : '#748c94', fontSize: 12 }}
                        >Settings</Text>
                    </View>
                )
            }} />
            <Tab.Screen name="Notifications" component={Logout} options={{
                tabBarIcon: ({ focused }) => (
                    <View style={{ alignItems: 'center', justifyContent: 'center', top: 10 }}>
                        <Image
                            source={require('../assets/icons/logout.png')}
                            resizeMode="contain"
                            style={{
                                width: 25,
                                height: 25,
                                tintColor: focused ? '#f8991d' : '#748c94',
                            }}
                        />
                        <Text
                            style={{ color: focused ? '#f8991d' : '#748c94', fontSize: 12 }}
                        >Log Out</Text>
                    </View>
                )
            }} />
        </Tab.Navigator>
    );
}

const styles = StyleSheet.create({
    shadow: {
        shadowColor: '#7F5DF0',
        shadowOffset: {
            width: 0,
            height: 10,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.5,
        elevation: 0
    }
});

export default Tabs;