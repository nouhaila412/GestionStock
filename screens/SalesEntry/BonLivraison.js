import React from 'react'
import { View, Text, Image, ImageBackground, ScrollView, TextInput, TouchableOpacity, StyleSheet } from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome5';
import { DataTable } from 'react-native-paper';


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
                <Icon
                    name='arrow-left'
                    size={25}
                    style={{

                        marginTop: 35,
                        marginLeft: 10
                    }}
                    color={'#9A9A9A'}
                    onPress={() => {
                        navigation.goBack()
                    }}
                />
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
                            marginTop: 5,
                            textAlign: 'center'
                        }}>Bons de Réception</Text>
                    </View>
                </View>
            </View>

            <View style={{
                backgroundColor: "#FFF",
                paddingVertical: 8,
                paddingHorizontal: 50,
                marginHorizontal: 20,
                borderRadius: 15,
                marginTop: -35,
                flexDirection: "row",
                alignItems: "center"
            }}>
                <TextInput
                    placeholder="Recherche par fournisseur"
                    placeholderTextColor="#00ADB7"
                    style={{
                        fontWeight: "bold",
                        fontSize: 18,
                        width: 260
                    }}
                />
                <Image
                    source={require('../../assets/icons/find.png')}
                    style={{ height: 20, width: 20, marginStart: -290 }}
                />
            </View>
            <View style={{
                flexDirection: "row",
                paddingHorizontal: 20,
                width: "100%",
                alignItems: "center"
            }}>
                <View style={{ width: "100%" }}>
                    <Text style={{
                        fontWeight: "bold",
                        fontSize: 17,
                        color: "#585a61",
                        marginTop: 30
                    }}>Liste des bons de réception</Text>
                    <View style={{
                        height: 4,
                        backgroundColor: "#c4dbe9",
                        width: 210,
                        marginTop: -2
                    }}>

                    </View>

                </View>

            </View>
            <DataTable style={{ padding: 20, marginTop: 15 }}>
                <DataTable.Header>
                    <DataTable.Title>BR N°</DataTable.Title>
                    <DataTable.Title numeric>Date Réception</DataTable.Title>
                    <DataTable.Title numeric>Fournisseur</DataTable.Title>
                    <DataTable.Title numeric>Total</DataTable.Title>
                </DataTable.Header>

                <DataTable.Row>
                    <DataTable.Cell>BR-20180800002</DataTable.Cell>
                    <DataTable.Cell numeric>05-07-2018</DataTable.Cell>
                    <DataTable.Cell numeric>Entreprise SARL</DataTable.Cell>
                    <DataTable.Cell numeric>267800DH</DataTable.Cell>

                </DataTable.Row>
            </DataTable>
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