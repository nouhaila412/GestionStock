import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import LoginScreen from '../screens/Login';
import Design from '../screens/MainScreen';
import Logout from '../screens/Logout';
import AboutUs from '../AboutUs';
import UserUI from '../UserUI'
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
                    bottom: 35,
                    left: 20,
                    right: 20,
                    elevation: 0,
                    backgroundColor: '#ffffff',
                    borderRadius: 15,
                    height: 70,
                    ...styles.shadow

                }
            }}
        >
            <Tab.Screen name="Home" component={Design} options={{
                tabBarIcon: ({ focused }) => (
                    <View style={{ alignItems: 'center', justifyContent: 'center', top: 5 }}>
                        <Image
                            source={require('../assets/icons/home.png')}
                            resizeMode="contain"
                            style={{
                                width: 20,
                                height: 20,
                                tintColor: focused ? '#f8991d' : '#748c94',
                            }}
                        />
                        <Text
                            style={{ color: focused ? '#f8991d' : '#748c94', fontSize: 11 }}
                        >HOME</Text>
                    </View>
                )
            }} />
            <Tab.Screen name="Account" component={LoginScreen} options={{
                tabBarIcon: ({ focused }) => (
                    <View style={{ alignItems: 'center', justifyContent: 'center', top: 5 }}>
                        <Image
                            source={require('../assets/icons/find.png')}
                            resizeMode="contain"
                            style={{
                                width: 20,
                                height: 20,
                                tintColor: focused ? '#f8991d' : '#748c94',
                            }}
                        />
                        <Text
                            style={{ color: focused ? '#f8991d' : '#748c94', fontSize: 11 }}
                        >Find</Text>
                    </View>
                )
            }} />
            <Tab.Screen name="Post" component={AboutUs} options={{
                tabBarIcon: ({ focused }) => (
                    <Image
                        source={require('../assets/icons/info.png')}
                        resizeMode="contain"
                        style={{
                            width: 30,
                            height: 30,
                            tintColor: '#fff',
                        }}
                    />
                ),
                tabBarButton: (props) => (
                    <CustomTabBarButton {...props} />
                )
            }} />
            <Tab.Screen name="Profil" component={UserUI} options={{
                tabBarIcon: ({ focused }) => (
                    <View style={{ alignItems: 'center', justifyContent: 'center', top: 5 }}>
                        <Image
                            source={require('../assets/icons/account.png')}
                            resizeMode="contain"
                            style={{
                                width: 20,
                                height: 20,
                                tintColor: focused ? '#f8991d' : '#748c94',
                            }}
                        />
                        <Text
                            style={{ color: focused ? '#f8991d' : '#748c94', fontSize: 11 }}
                        >Profil</Text>
                    </View>
                )
            }} />
            <Tab.Screen name="Notifications" component={Logout} options={{
                tabBarIcon: ({ focused }) => (
                    <View style={{ alignItems: 'center', justifyContent: 'center', top: 5 }}>
                        <Image
                            source={require('../assets/icons/logout.png')}
                            resizeMode="contain"
                            style={{
                                width: 20,
                                height: 20,
                                tintColor: focused ? '#f8991d' : '#748c94',
                            }}
                        />
                        <Text
                            style={{ color: focused ? '#f8991d' : '#748c94', fontSize: 11 }}
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