import React from 'react'
import { View, Text, TouchableHighlight, ImageBackground, Image } from 'react-native';
import { Input } from 'react-native-elements/dist/input/Input';
import Icon from 'react-native-vector-icons/FontAwesome';
import { Root,Popup } from 'popup-ui';
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { addlivt, updatePost } from "../../Action";
import * as Animatable from 'react-native-animatable';
import axios from "axios";

const ProductDetails = ({ navigation, i }) => {
    const [qtec, setQtec] = React.useState(5);
    const dispatch = useDispatch();

    const [vari, setVar] = React.useState(0)


    const ind = useSelector((state) => state.indice);

    const [art, setArt] = React.useState([])
    React.useEffect(() => {
        axios.get(`http://1af3-196-206-107-185.ngrok.io/apiachat_lig_pie/${ind}`)
            .then((res) => {
                setArt(res.data)
                setVar(res.data.Qte_Liv);

            })
            .catch((error) => {
                console.error(error);
            });



    }, [ind]);
    art.Qte_Liv = vari;



    //const {code} = route.params;
    return (
        <Root>
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
                <Icon name="arrow-left"
                    onPress={() => { navigation.goBack() }}
                    size={25} color="#FFFF"  />

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
                             Fiche Article  

                    </Text>


                </View>
            </View>
            <Animatable.View animation="fadeInUp" duration={2000} delay={1000}>
            <View style={{
                paddingHorizontal: 32,
                alignSelf: "center",
                marginTop: 26,
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
                        DESIGNATION                  </Text>

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
                            marginTop: 10
                        }}
                    >
                        <Input

                            value={art.Num_Pie}
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

                        //value= {code.data}
                        />
                    </View>

                </View>

                <View style={{
                    flexDirection: "row",
                    alignItems: "center",
                    marginTop: 15
                }}>
                    <Text
                        style={{
                            fontFamily: "RobotoRegular",
                            color: "#a2a2db",
                            fontSize: 16
                        }}>
                        Qte Stock :
                    </Text>

                    <Text
                        style={{
                            fontFamily: "RobotoRegular",
                            color: "#522289",
                            paddingLeft: 136,
                            fontSize: 16

                        }}>
                        {art.Cod_Lot}


                    </Text>
                </View>
               

                <Text style={{
                    fontSize: 17,
                    marginTop: 15, marginVertical: 16,
                    color: "#a2a2db"
                }}>
                    - - - - - - - - -  - - - -  - - - - - - -  -
                </Text>


                <View style={{
                    flexDirection: "row",
                    alignItems: "center",
                    padding: 10
                }}>
                    <Text style={{
                        fontSize: 16,
                        fontFamily: "RobotoRegular",
                        color: "#a2a2db"
                    }}>
                        Date Production :
                    </Text>
                    <Text style={{
                        fontSize: 16,
                        fontFamily: "RobotoBold",
                        color: "#4b3ca7",
                        paddingLeft: 79,
                    }}>
                        {art.Num_Pie_Org}
                    </Text>
                </View>
                <View style={{
                    flexDirection: "row",
                    alignItems: "center"
                }}>
                    <Text style={{
                        fontSize: 16,
                        fontFamily: "RobotoRegular",
                        color: "#a2a2db",
                        marginTop: 5
                    }}>
                        Date Péremption :
                    </Text>
                    <Text style={{
                        fontSize: 16,
                        fontFamily: "RobotoBold",
                        color: "#4b3ca7",
                        paddingLeft: 72,
                    }}>
                        
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

                    }}
                        onPress={() => {
                            vari < qtec ? setVar(vari + 1) : setVar(vari); vari < qtec ? dispatch(addlivt(1)) :
                                setVar(vari); dispatch(updatePost(ind, art)) ; Popup.show({
                                    type: 'Success',
                                    title: 'Article Ajouté',
                                    button: true,
                                    textBody: 'Votre ajout a été effectué par succès',
                                    buttontext: 'Ok',
                                    callback: () => Popup.hide()
                                  })
                        }}
                    >
                        Ajouter
                    </Text>
                </TouchableHighlight>
               


            </View>
            </Animatable.View>
        </ImageBackground>
        </Root>
    )
}
export default ProductDetails;