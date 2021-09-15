import React from "react";
import { View, Text, TouchableOpacity, StyleSheet, SafeAreaView } from "react-native";
import Icon from 'react-native-vector-icons/FontAwesome5';
import axios from "axios";
import { useSelector, useDispatch } from "react-redux";
import { Root,Popup } from "popup-ui";
import {getartfour} from "../Action";
import  { Path, G, Svg, Rect, Defs , Stop } from 'react-native-svg'
import COLORS from '../utils/Colors'
import { ScrollView } from "react-native-gesture-handler";


const ProductCard = ({navigation}) => {
  const dispatch = useDispatch();
   const artfour = useSelector((state) => state.artfour);

  const [produit, setProduit] = React.useState([])
    const [car, setcar] = React.useState([])


   React.useEffect(() => {
    axios
      .get("http://1af3-196-206-107-185.ngrok.io/apiProduit_Art/")
      .then((res) => {
        setProduit(res.data);
       
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

    return (
      <Root>
        <View>
        <View style={{ backgroundColor: '#53B4FF', height: 160 }}>
        <Svg
          height="60%"
          width="100%"
          viewBox="0 0 1440 320"
          style={{ position: 'absolute', top: 120 }}
        >
          <Path
            fill="#53B4FF"
            d="M0,96L48,112C96,128,192,160,288,186.7C384,213,480,235,576,213.3C672,192,768,128,864,128C960,128,1056,192,1152,208C1248,224,1344,192,1392,176L1440,160L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"
          />
        </Svg>
        <Icon name="arrow-left" size={24} color={COLORS.dark} 
         style={{marginLeft: 27, marginTop: 40}}
         onPress={()=>navigation.goBack()}
        />
        <Text style={{ color: COLORS.white, fontWeight: 'bold', fontSize: 20, textAlign: 'center', marginTop: 20 }}>
          Liste des Articles
        </Text>
      </View>
      <ScrollView showsHorizontalScrollIndicator={false}>
      <View style={{ marginTop: 40, padding: 10,  }}>
      {produit.map((pro,i) =>(
              <TouchableOpacity  style={{ marginBottom: 10, height: 140 }}>
            

            <View style={{ flex: 1, padding: 20 }}>
              <View style={[
                StyleSheet.absoluteFillObject,
                {backgroundColor: COLORS.background , borderRadius: 16 }]} />
              <Text style={styles.name}>Produit Designation : {pro.Lib_Art}</Text>
              <Text style={styles.desc}>Reference : {pro.Typ_Art}</Text>
              <Text style={styles.desc}>Code Produit {pro.Cod_Art}</Text>
              <Icon onPress={()=>{dispatch(getartfour(pro)) ; Popup.show({
                  type: 'Success',
                  title: 'Article Ajouté',
                  button: true,
                  textBody: 'Votre ajout a été effectué par succès',
                  buttontext: 'Ok',
                  callback: () => Popup.hide()
                }) }
                 
              }  name="plus" size={22} color={COLORS.grey} style={{ bottom: 65.5, right: 40, position: 'absolute' }} />
            </View>
          </TouchableOpacity>
      
          ))}
       
        </View>
      </ScrollView>
        
          
        <View style={styles.bg} />
      </View>
      </Root>
    );
  }
const styles = StyleSheet.create({
    cardImageContainer: {
        height: 150,
        width: 140,
        borderRadius: 20,
        backgroundColor: '#f3f3f3'
    },
    cardContainer:{
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 20
    }
})

export default ProductCard;
