import React from 'react'
import { View, Text, TouchableHighlight, ImageBackground, Image } from 'react-native';
import { Input } from 'react-native-elements/dist/input/Input';
import Icon from 'react-native-vector-icons/FontAwesome';


const ProductDetails = ({navigation, route})=>{
    const {code} = route.params;
        return (
            <ImageBackground
                source={require("../../assets/icons/back2.png")}
                style={{ width: "100%", height: "100%" }}
            >
                <View
          style={{
            flexDirection: "row",
            marginTop: 40,
            alignItems: "center",
            paddingHorizontal: 40,
          }}
        >
          <Icon name="arrow-left" size={25} color="#FFFF" style={{ width: 20 }} />
          
        </View>
        <View
          style={{
            width: "100%",
            marginBottom: 20,
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <View
            style={{
              width: 80,
              height: 80,
              borderRadius: 50,
              backgroundColor: "#5facdb",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
           <Image
              source={require("../../assets/icons/inventory.png")}
              style={{ height: 60, width: 60 }}
            /> 
          </View>
          <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            paddingHorizontal: 40,
          }}
        >
          <Text
            style={{
              fontSize: 24,
              fontFamily: "RobotoBold",
              color: "#FFF",
            }}
          >
            Fiche Produit
          </Text>
         
         
        </View>
        </View>

                <View style={{
                    paddingHorizontal: 32,
                    alignSelf: "center",
                    marginTop: -6,
                    backgroundColor: "#FFF",
                    height: 450,
                    elevation: 1,
                    width: 340,
                    borderRadius: 15,
                    alignItems: 'center'
                }}>


                    <View style={{
                        flexDirection: "row",
                        marginTop: 35,
                        alignItems: "center"
                    }}>
                        <Text style={{
                            fontFamily: "RobotoRegular",
                            color: "#a2a2db",
                            paddingRight: 87,
                            fontSize: 14
                        }}>
                            Désignation du produit:
                        </Text>

                    </View>

                    <View style={{
                        flexDirection: "row",
                        marginTop: -15,
                        alignItems: "center"
                    }}>
                        <View
                                style={{
                                    paddingHorizontal: 5,
                                    paddingVertical: 5,
                                    width: 255,
                                    marginTop: -10
                                }}
                            >
                                <Input
                            

                                />
                            </View>
                    </View>

                    <View style={{
                        flexDirection: "row",
                        marginTop: -20,
                        alignItems: "center"
                    }}>
                        <Icon
                                    name='barcode'
                                    size={24}
                                    color="#666"
                                    onPress={() => alert('hello')}
                                />
                         <View
                                style={{
                                    
                                    width: 220
                                }}
                            >
                                <Input
                            
                                    value= {code.data}
                                />
                            </View>
                    
                    </View>

                    <View style={{
                        flexDirection: "row",
                        alignItems: "center",
                    }}>
                        <Text
                            style={{
                                fontFamily: "RobotoRegular",
                                color: "#522289",
                                fontSize: 16
                            }}>
                            Qte Stock
                        </Text>

                        <Text
                            style={{
                                fontFamily: "RobotoRegular",
                                color: "#522289",
                                paddingLeft: 136,
                                fontSize: 16
                            }}>
                            15
                        </Text>
                    </View>
                    <View style={{
                        flexDirection: "row",
                        alignItems: "center",
                        marginTop: 10
                    }}>
                        <Text
                            style={{
                                fontFamily: "RobotoRegular",
                                color: "#522289",
                                fontSize: 16
                            }}>
                            Prix Unitaire
                        </Text>

                        <Text
                            style={{
                                fontFamily: "RobotoRegular",
                                color: "#522289",
                                paddingLeft: 116,
                                fontSize: 16
                            }}>
                            15
                        </Text>
                    </View>

                    <Text style={{
                        fontSize: 17,
                        marginTop: -5, marginVertical: 16,
                        color: "#a2a2db"
                    }}>
                        - - - - - - - - -  - - - -  - - - - - - -  -
                    </Text>
                    

                    <View style={{
                        flexDirection: "row",
                        alignItems: "center"
                    }}>
                        <Text style={{
                            fontSize: 16,
                            fontFamily: "RobotoRegular",
                            color: "#522289"
                        }}>
                            Date Production
                        </Text>
                        <Text style={{
                            fontSize: 16,
                            fontFamily: "RobotoBold",
                            color: "#4b3ca7",
                            paddingLeft: 79,
                        }}>
                            #400
                        </Text>
                    </View>
                    <View style={{
                        flexDirection: "row",
                        alignItems: "center"
                    }}>
                        <Text style={{
                            fontSize: 16,
                            fontFamily: "RobotoRegular",
                            color: "#522289"
                        }}>
                            Date Préamption
                        </Text>
                        <Text style={{
                            fontSize: 16,
                            fontFamily: "RobotoBold",
                            color: "#4b3ca7",
                            paddingLeft: 72,
                        }}>
                            #400
                        </Text>
                    </View>

                    <TouchableHighlight
                        underlayColor="#6600bb"
                        style={{
                            width: 200,
                            marginLeft: 5,
                            elevation: 2,
                            marginTop: 25,
                            backgroundColor: "#44FEA1",
                            paddingVertical: 13,
                            borderRadius: 25,
                            alignSelf: "center"
                        }}
                       
                    >
                        <Text style={{
                            fontFamily: "RobotoBold",
                            color: "#FFF",
                            textAlign: "center",
                            fontSize: 18
                        }}>
                            Valider
                        </Text>
                    </TouchableHighlight>
                    <TouchableHighlight
                        underlayColor="#6600bb"
                        style={{
                            width: 200,
                            marginLeft: 5,
                            elevation: 2,
                            marginTop: 15,
                            backgroundColor: "#ef5350",
                            paddingVertical: 13,
                            borderRadius: 25,
                            alignSelf: "center"
                        }}
                        
                    >
                        
                        
                        <Text style={{
                            fontFamily: "RobotoBold",
                            color: "#FFF",
                            textAlign: "center",
                            fontSize: 18
                        }}>
                            Annuler
                        </Text>
                    </TouchableHighlight>

                   
                </View>
            </ImageBackground>
        )
    }
export default ProductDetails;