import React from 'react'
import { View, Text, Image, ImageBackground, ScrollView, TextInput, TouchableOpacity, StyleSheet } from 'react-native'
import { LinearGradient } from 'react-native-svg'
import ActionButton from 'react-native-action-button';
import Icon from 'react-native-vector-icons/FontAwesome5';

const Home = ({ navigation }) => {
    return (
        <View style={{
            backgroundColor: "#FFF",
            flex: 1
        }}>
            <View style={{
                backgroundColor: "#7dc5df",
                height: "28%",
                borderBottomLeftRadius: 20,
                borderBottomRightRadius: 20,
                paddingHorizontal: 20
            }}>
                <TouchableOpacity onPress={()=> navigation.goBack()}>
                <Image
                    source={require('../../assets/icons/1.png')}
                    style={{
                        height: 10,
                        width: 20,
                        marginTop: 50
                    }}
                />
                </TouchableOpacity>
                
                <View style={{
                    flexDirection: "row",
                    alignItems: "center",
                    marginTop: 25,
                    width: "100%"
                }}>
                    <View style={{ width: "100%" }}>
                        <Text style={{
                            fontSize: 28,
                            color: "#FFF",
                            fontWeight: "bold",
                            marginTop: -5,
                            textAlign: 'center'
                        }}>Sorties de stocks</Text>
                    </View>
                    {/*  <View style={{ width: "50%", alignItems: "flex-start" }}>
                        <Image
                            source={require('../assets/icons/find.png')}
                            style={{height:60,width:60}}
                        /> 
                    </View> */}
                </View>
            </View>
          

            <ActionButton buttonColor="#f8991d" style={{ marginTop: -40 }}>
                <ActionButton.Item buttonColor='#97C6B1' title="Clients" onPress={() => navigation.navigate('ClientsList')}>
                    <Icon name="users" style={styles.actionButtonIcon} />
                </ActionButton.Item>
                <ActionButton.Item buttonColor='#3498db' title="Bons de Livraison" onPress={() => navigation.navigate('BonLivraison')}>
                    <Icon name="file-invoice" style={styles.actionButtonIcon} />
                </ActionButton.Item>
            </ActionButton>



        </View>
    )
}
export default Home;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF'
    },
    welcome: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10
    },
    actionButtonIcon: {
        fontSize: 20,
        height: 22,
        color: 'white',
    }
});