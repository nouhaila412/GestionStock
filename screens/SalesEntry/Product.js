import React from "react";
import { View, Text, Image, ImageBackground, TextInput, ScrollView, TouchableOpacity, Modal } from "react-native";
import Card from '../../components/Card'
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import Icon from 'react-native-vector-icons/FontAwesome';
import {addcomt,updatecmd} from "../../Action";
import axios from "axios";
import COLORS from '../../utils/Colors';

const Product = ({navigation}) => {

  const varia = useSelector((state) => state.variable);
    const ar = useSelector((state) => state.articles.filter((item) => item.Num_Ord === varia));


  const livto = useSelector((state) => state.livt);
    const cmtt = useSelector((state) => state.comt);
const dispatch = useDispatch(); 

const [commande, setCommande] = React.useState([])

 React.useEffect(() => {
        axios.get(`http://1af3-196-206-107-185.ngrok.io/apiachat_ent_pie_commande/${varia}`)
            .then((res) => {
                setCommande(res.data)

            })
            .catch((error) => {
                console.error(error);
            });
                     


    }, []);
commande.Flag_Transf="t"
  livto >= cmtt ?   dispatch(updatecmd(varia,commande)):" "

    
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
            paddingHorizontaar: 40,
          }}
        >
         <Icon name="arrow-left"
                    onPress={() => { navigation.goBack() }}
                    size={24} color={COLORS.dark} style={{marginLeft: 20, marginTop: -25}} />

          <Text
                    style={{
                        fontSize: 25,
                        color: "#3C99DC",
                        fontFamily: "RobotoBold",
                        marginTop: 20,
                        marginBottom: -15,
                        marginLeft: 50
                    }}
                >
                    Liste des Articles 
                </Text>
        </View>
        <Text
                    style={{
                        fontSize: 20,
                        color: "#636364",
                        fontFamily: "RobotoBold",
                        marginTop: 30,
                        marginBottom: -15,
                        textAlign: 'center'
                    }}
                >
                   
               <Text>    Commande N°: {varia} </Text>
               
                  
                </Text>
       
        <ScrollView
          showsVerticalScrollIndicator={false}
          style={{
            marginVertical: 5,
            marginTop: 35
          }}
        >
          
                   {ar && ar.map((i,keyw) =>(
            <Card key={keyw} prop={i}
     />
                  ))}
          
          

          
        </ScrollView>

      </ImageBackground>
    );
  }
export default Product;