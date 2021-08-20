import React from "react";
import { View, Text, Image, ImageBackground, TextInput, ScrollView, TouchableOpacity, Modal } from "react-native";
import Card from '../../components/Card'

const Product = ({navigation}) => {
  
    return (
      <ImageBackground
        source={require("../../assets/icons/back.png")}
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
          <TouchableOpacity onPress={()=> navigation.goBack()}>
                <Image
                    source={require('../../assets/icons/1.png')}
                    style={{
                        height: 10,
                        width: 20,
                        marginTop: 50,
                        color: '#333'
                    }}
                />
                </TouchableOpacity>
          <Text
                    style={{
                        fontSize: 25,
                        color: "#f8991d",
                        fontFamily: "RobotoBold",
                        marginTop: 10,
                        marginBottom: -15,
                        marginLeft: 70
                    }}
                >
                    Gestion Produits
                </Text>
        </View>
        <Text
                    style={{
                        fontSize: 20,
                        color: "#636364",
                        fontFamily: "RobotoBold",
                        marginTop: 30,
                        marginBottom: -15,
                        marginLeft: 70
                    }}
                >
                    Commande N°: XXXXXXXX
                </Text>
       
        <ScrollView
          showsVerticalScrollIndicator={false}
          style={{
            marginVertical: 5,
            marginTop: 20
          }}
        >
          <Card
           
          />
          <Card
            
          />
          <Card
           
          />

          
        </ScrollView>

      </ImageBackground>
    );
  }
export default Product;