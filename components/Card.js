import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import Icon from 'react-native-vector-icons/FontAwesome';
import { Input } from 'react-native-elements/dist/input/Input';
import { useNavigation } from '@react-navigation/native';

const Card = () => {
  const navigation = useNavigation(); 

    return (
      <TouchableOpacity
       onPress={()=>navigation.navigate('Scan')}
        style={{
          paddingHorizontal: 32,
          alignSelf: "center",
          alignItems: "center",
          marginTop: 20,
          backgroundColor: "#FFF",
          height: 192,
          elevation: 1,
          width: 320,
          borderRadius: 15,
        }}
      >
        <View
          style={{
            flexDirection: "row",
            paddingTop: 20,
            alignSelf: "center",
          }}
        >
          <Text
            style={{
              fontFamily: "RobotoBold",
              color: "black",
              fontSize: 16,
              padding: 5,
              marginTop: 15


            }}
          >
            Produit
          </Text>
          <View
            style={{
              paddingHorizontal: 5,
              paddingVertical: 5,
              width: 190
            }}
          >
            <Input
              placeholder='Désignation'
              leftIcon={{ type: 'font-awesome', name: 'edit' }}

            />
          </View>

          <View
            style={{
              paddingHorizontal: 5,
              paddingVertical: 5,
              marginTop: 15

            }}
          >
            <Icon
              name='barcode'
              size={24}
              color="#666"
              onPress={() => navigation.navigate('Scan')}
            />
          </View>
        </View>

        <View
          style={{
            flexDirection: "row",
            marginTop: -5,
            alignItems: "center",
          }}
        >
          <Text
            style={{
              fontFamily: "RobotoRegular",
              color: "#a2a2db",
              fontSize: 16,
            }}
          >
            Qte Commandée:
          </Text>
          <Text
            style={{
              fontSize: 16,
              fontFamily: "RobotoRegular",
              color: "#a2a2db",
              paddingLeft: 87,
            }}
          >
            Qte Livrée:
          </Text>
        </View>

        <View
          style={{
            flexDirection: "row",
            marginTop: 10,
            alignItems: "center",
          }}
        >
          <Text
            style={{
              fontFamily: "RobotoRegular",
              color: "black",
              fontSize: 16,
            }}
          >
            200
          </Text>

          <Text
            style={{
              fontFamily: "RobotoRegular",
              color: "black",
              paddingLeft: 160,
              fontSize: 16,
            }}
          >
            ------
          </Text>
        </View>



        <Text
          style={{
            fontFamily: "RobotoRegular",
            color: "#a2a2db",
            fontSize: 12,
            marginTop: 5
          }}
        >
          20JUNe, 2021
        </Text>

        <View
          style={{
            flexDirection: "row",
            marginTop: -8,
            alignItems: "center",
          }}
        >


        </View>
      </TouchableOpacity>
    );
  }
export default Card;