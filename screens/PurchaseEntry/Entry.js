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
                        }}>Entrées de stocks</Text>
                    </View>
                    {/*  <View style={{ width: "50%", alignItems: "flex-start" }}>
                        <Image
                            source={require('../assets/icons/find.png')}
                            style={{height:60,width:60}}
                        /> 
                    </View> */}
                </View>
            </View>
            <LinearGradient
                colors={["rgba(0,164,109,0.4)", "transparent"]}
                style={{
                    left: 0,
                    right: 0,
                    height: 90,
                    marginTop: -45
                }}
            >

            </LinearGradient>

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
                    placeholder="Rechercher un fournisseur"
                    placeholderTextColor="#00ADB7"
                    style={{
                        fontWeight: "bold",
                        fontSize: 18,
                        width: 260
                    }}
                />
                <Image
                    source={require('../../assets/icons/find.png')}
                    style={{ height: 20, width: 20, marginRight: -15 }}
                />
            </View>
            <View style={{
                flexDirection: "row",
                paddingHorizontal: 20,
                width: "100%",
                alignItems: "center"
            }}>
                <View style={{ width: "50%" }}>
                    <Text style={{
                        fontWeight: "bold",
                        fontSize: 17,
                        color: "#585a61",
                        marginTop: 30
                    }}>Liste des entrées</Text>
                    <View style={{
                        height: 4,
                        backgroundColor: "#c4dbe9",
                        width: 115,
                        marginTop: -5
                    }}>

                    </View>

                </View>
                <View style={{ width: "50%", alignItems: "flex-end" }}>
                    {/*  <View style={{
                            backgroundColor:"#00a46c",
                            paddingHorizontal:20,
                            paddingVertical:5,
                            borderRadius:15,
                             marginTop: 30
                        }}>
                            <Text style={{
                                fontWeight:"bold",
                                fontSize:13,
                                color:"#FFF"
                            }}>More</Text>
                        </View> */}

                </View>
            </View>



            <ScrollView
                horizontal
                showsHorizontalScrollIndicator={false}
                style={{ height: 400 }}
            >
                <LinearGradient
                    colors={["rgba(0,164,109,0.09)", "transparent"]}
                    style={{
                        position: "absolute",
                        left: 0,
                        right: 0,
                        height: 100,
                        marginTop: 220,
                        top: 0
                    }}
                />
                <TouchableOpacity
                    onPress={() => navigation.navigate("Detail")}
                    style={{
                        height: 250,
                        elevation: 2,
                        backgroundColor: "#FFF",
                        marginLeft: 20,
                        marginTop: 20,
                        borderRadius: 15,
                        marginBottom: 10,
                        width: 180
                    }}
                >
                    {/* <Image
                            source={require('../images/4.png')}
                        /> */}
                    <View style={{
                        flexDirection: "row",
                        paddingTop: 10,
                        paddingHorizontal: 10
                    }}>
                        <Text style={{
                            fontWeight: "bold"
                        }}>Fournisseur XXX</Text>
                        <Text style={{
                            fontWeight: "bold",
                            color: "#00a46c",
                            paddingLeft: 15
                        }}>2400DH</Text>
                    </View>
                    <View style={{
                        flexDirection: "row",
                        marginTop: 10
                    }}>
                        <Text style={{
                            paddingHorizontal: 10,
                            fontWeight: "bold",
                            color: "#636364",
                            paddingTop: 10
                        }}>
                            Réf:
                        </Text>
                        <Text style={{
                            paddingHorizontal: -5,
                            color: "black",
                            fontSize: 14,
                            paddingTop: 10
                        }}>
                            PRB1234-2
                        </Text>
                    </View>

                    <View style={{
                        flexDirection: "row",

                    }}>
                        <Text style={{
                            paddingHorizontal: 10,
                            fontWeight: "bold",
                            color: "#636364",
                            paddingTop: 10
                        }}>
                            Produit:
                        </Text>
                        <Text style={{
                            paddingHorizontal: -5,
                            color: "black",
                            fontSize: 14,
                            paddingTop: 10
                        }}>
                            PRB1234-2
                        </Text>
                    </View>
                    <View style={{
                        flexDirection: "row",

                    }}>
                        <Text style={{
                            paddingHorizontal: 10,
                            fontWeight: "bold",
                            color: "#636364",
                            paddingTop: 10
                        }}>
                            Unité:
                        </Text>
                        <Text style={{
                            paddingHorizontal: -5,
                            color: "black",
                            fontSize: 14,
                            paddingTop: 10
                        }}>
                            PRB1234-2
                        </Text>
                    </View>
                    <View style={{
                        flexDirection: "row",

                    }}>
                        <Text style={{
                            paddingHorizontal: 10,
                            fontWeight: "bold",
                            color: "#636364",
                            paddingTop: 10
                        }}>
                            Qte livrée:
                        </Text>
                        <Text style={{
                            paddingHorizontal: -5,
                            color: "black",
                            fontSize: 14,
                            paddingTop: 10
                        }}>
                            100
                        </Text>
                    </View>
                    <View style={{
                        flexDirection: "row",

                    }}>
                        <Text style={{
                            paddingHorizontal: 10,
                            fontWeight: "bold",
                            color: "#636364",
                            paddingTop: 10
                        }}>
                            Date Réception:
                        </Text>

                    </View>
                    <Text style={{
                        paddingHorizontal: -5,
                        color: "black",
                        fontSize: 14,
                        paddingTop: 10,
                        marginLeft: 30
                    }}>
                        18-08-2021
                    </Text>
                    
                </TouchableOpacity>
                <TouchableOpacity
                    onPress={() => navigation.navigate("Detail")}
                    style={{
                        height: 250,
                        elevation: 2,
                        backgroundColor: "#FFF",
                        marginLeft: 20,
                        marginTop: 20,
                        borderRadius: 15,
                        marginBottom: 10,
                        width: 190
                    }}
                >
                    {/* <Image
                            source={require('../images/4.png')}
                        /> */}
                    <View style={{
                        flexDirection: "row",
                        paddingTop: 10,
                        paddingHorizontal: 10
                    }}>
                        <Text style={{
                            fontWeight: "bold"
                        }}>Fournisseur XXX</Text>
                        <Text style={{
                            fontWeight: "bold",
                            color: "#00a46c",
                            paddingLeft: 25
                        }}>1500DH</Text>
                    </View>
                    <View style={{
                        flexDirection: "row",
                        marginTop: 10
                    }}>
                        <Text style={{
                            paddingHorizontal: 10,
                            fontWeight: "bold",
                            color: "#636364",
                            paddingTop: 10
                        }}>
                            Réf:
                        </Text>
                        <Text style={{
                            paddingHorizontal: -5,
                            color: "black",
                            fontSize: 14,
                            paddingTop: 10
                        }}>
                            PRB1234-2
                        </Text>
                    </View>

                    <View style={{
                        flexDirection: "row",

                    }}>
                        <Text style={{
                            paddingHorizontal: 10,
                            fontWeight: "bold",
                            color: "#636364",
                            paddingTop: 10
                        }}>
                            Produit:
                        </Text>
                        <Text style={{
                            paddingHorizontal: -5,
                            color: "black",
                            fontSize: 14,
                            paddingTop: 10
                        }}>
                            PRB1234-2
                        </Text>
                    </View>
                    <View style={{
                        flexDirection: "row",

                    }}>
                        <Text style={{
                            paddingHorizontal: 10,
                            fontWeight: "bold",
                            color: "#636364",
                            paddingTop: 10
                        }}>
                            Unité:
                        </Text>
                        <Text style={{
                            paddingHorizontal: -5,
                            color: "black",
                            fontSize: 14,
                            paddingTop: 10
                        }}>
                            PRB1234-2
                        </Text>
                    </View>
                    <View style={{
                        flexDirection: "row",

                    }}>
                        <Text style={{
                            paddingHorizontal: 10,
                            fontWeight: "bold",
                            color: "#636364",
                            paddingTop: 10
                        }}>
                            Qte livrée:
                        </Text>
                        <Text style={{
                            paddingHorizontal: -5,
                            color: "black",
                            fontSize: 14,
                            paddingTop: 10
                        }}>
                            100
                        </Text>
                    </View>
                    <View style={{
                        flexDirection: "row",

                    }}>
                        <Text style={{
                            paddingHorizontal: 10,
                            fontWeight: "bold",
                            color: "#636364",
                            paddingTop: 10
                        }}>
                            Date Réception:
                        </Text>

                    </View>
                    <Text style={{
                        paddingHorizontal: -5,
                        color: "black",
                        fontSize: 14,
                        paddingTop: 10,
                        marginLeft: 30
                    }}>
                        18-08-2021
                    </Text>
                </TouchableOpacity>
                <TouchableOpacity
                    onPress={() => navigation.navigate("Detail")}
                    style={{
                        height: 250,
                        elevation: 2,
                        backgroundColor: "#FFF",
                        marginLeft: 20,
                        marginTop: 20,
                        borderRadius: 15,
                        marginBottom: 10,
                        width: 180
                    }}
                >
                    {/* <Image
                            source={require('../images/4.png')}
                        /> */}
                    <View style={{
                        flexDirection: "row",
                        paddingTop: 10,
                        paddingHorizontal: 10
                    }}>
                        <Text style={{
                            fontWeight: "bold"
                        }}>Fournisseur XXX</Text>
                        <Text style={{
                            fontWeight: "bold",
                            color: "#00a46c",
                            paddingLeft: 35
                        }}>2400DH</Text>
                    </View>
                    <View style={{
                        flexDirection: "row",
                        marginTop: 10
                    }}>
                        <Text style={{
                            paddingHorizontal: 10,
                            fontWeight: "bold",
                            color: "#636364",
                            paddingTop: 10
                        }}>
                            Réf:
                        </Text>
                        <Text style={{
                            paddingHorizontal: -5,
                            color: "black",
                            fontSize: 14,
                            paddingTop: 10
                        }}>
                            PRB1234-2
                        </Text>
                    </View>

                    <View style={{
                        flexDirection: "row",

                    }}>
                        <Text style={{
                            paddingHorizontal: 10,
                            fontWeight: "bold",
                            color: "#636364",
                            paddingTop: 10
                        }}>
                            Produit:
                        </Text>
                        <Text style={{
                            paddingHorizontal: -5,
                            color: "black",
                            fontSize: 14,
                            paddingTop: 10
                        }}>
                            PRB1234-2
                        </Text>
                    </View>
                    <View style={{
                        flexDirection: "row",

                    }}>
                        <Text style={{
                            paddingHorizontal: 10,
                            fontWeight: "bold",
                            color: "#636364",
                            paddingTop: 10
                        }}>
                            Unité:
                        </Text>
                        <Text style={{
                            paddingHorizontal: -5,
                            color: "black",
                            fontSize: 14,
                            paddingTop: 10
                        }}>
                            PRB1234-2
                        </Text>
                    </View>
                    <View style={{
                        flexDirection: "row",

                    }}>
                        <Text style={{
                            paddingHorizontal: 10,
                            fontWeight: "bold",
                            color: "#636364",
                            paddingTop: 10
                        }}>
                            Qte livrée:
                        </Text>
                        <Text style={{
                            paddingHorizontal: -5,
                            color: "black",
                            fontSize: 14,
                            paddingTop: 10
                        }}>
                            100
                        </Text>
                    </View>
                    <View style={{
                        flexDirection: "row",

                    }}>
                        <Text style={{
                            paddingHorizontal: 10,
                            fontWeight: "bold",
                            color: "#636364",
                            paddingTop: 10
                        }}>
                            Date Réception:
                        </Text>

                    </View>
                    <Text style={{
                        paddingHorizontal: -5,
                        color: "black",
                        fontSize: 14,
                        paddingTop: 10,
                        marginLeft: 30
                    }}>
                        18-08-2021
                    </Text>
                </TouchableOpacity>


            </ScrollView>

            <ActionButton buttonColor="#f8991d" style={{ marginTop: -40 }}>
                <ActionButton.Item buttonColor='#97C6B1' title="Fournisseurs" onPress={() => navigation.navigate('SuppliersList')}>
                    <Icon name="users" style={styles.actionButtonIcon} />
                </ActionButton.Item>
                <ActionButton.Item buttonColor='#3498db' title="Bons de Réception" onPress={() => navigation.navigate('BonReception')}>
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