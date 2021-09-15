import React from "react";
import { View, Text, TouchableOpacity, StyleSheet, Image } from "react-native";
import Icon from 'react-native-vector-icons/FontAwesome';
import { useNavigation } from "@react-navigation/native";
import COLORS from '../utils/Colors';
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { getind,geton,addcomt} from "../Action";

const CardArticle = ({ar}) => {
    const navigation = useNavigation(); 
    const dispatch = useDispatch();
    return (
     <TouchableOpacity activeOpacity={0.8}>
        <View style={styles.cardContainer}>
            <View style={styles.cardImageContainer}>
                <Image source={require('../assets/icons/product.png')}
                style={{width: '100%', height: '100%', resizeMode:'contain'}} />
            </View>
            <View style={styles.cardDetailsContainer}>
                <View 
                style={{
                    flexDirection:'row',
                    justifyContent: 'space-between'
                    }}>
                    <Text style={{fontWeight: 'bold',color: COLORS.dark,fontSize: 16}}>{ar.Lib_Art}</Text>
                    <Icon name="barcode" size={22} color={COLORS.grey} onPress={() => {navigation.navigate('OutputDetails'); dispatch(getind(ar.id))}}  />
                </View>
                <Text style={{fontSize: 12, marginTop: 5, color: COLORS.dark}}>{ar.Cod_Art}</Text>
                <Text style={{fontSize: 10, marginTop: 5, color: COLORS.grey}}>{ ar.Typ_Art  } </Text>
                <View 
                style={{
                    flexDirection:'row',
                    marginTop: 5
                    }}>
                    <Icon name="map-marker" size={18} color={COLORS.primary} />
                    <Text style={{fontSize: 12, marginLeft: 5, color: COLORS.grey}}>Emplacement</Text>

                </View>
            </View>
        </View>
     </TouchableOpacity>
     
    );
  }
const styles = StyleSheet.create({
    cardImageContainer: {
        height: 150,
        width: 140,
        borderRadius: 20,
        backgroundColor: COLORS.background
    },
    cardContainer:{
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 20
    },cardDetailsContainer: {
        height: 120,
        backgroundColor: COLORS.white,
        flex:1,
        borderTopRightRadius: 10,
        borderBottomRightRadius: 10,
        padding: 20,
        justifyContent: "center"

    }
})

export default CardArticle;
