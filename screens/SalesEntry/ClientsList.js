import React from 'react';
import { TouchableOpacity, Image } from 'react-native';
import COLORS from '../../utils/Colors';
import Icon from 'react-native-vector-icons/FontAwesome5';
import { StyleSheet, Text, SafeAreaView,ScrollView, View, FlatList, Platform, SafeAreaProvider } from "react-native";
import { getPost ,getnomfour} from "../../Action";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import axios from "axios";

const Basic = ({ navigation }) => {
  const dispatch = useDispatch();
  const [client,setClient]= React.useState([])

   React.useEffect(() => {
        axios.get("http://1af3-196-206-107-185.ngrok.io/apiPart_Clt/")
            .then((res) => {
                setClient(res.data)
              

            })
            .catch((error) => {
                console.error(error);
            });



    }, []);
  // const navigation = useNavigation(); 
  return (

    <SafeAreaView style={{ flex: 1, padding: 10 , color: COLORS.white}}>
       <View style={styles.header}>
        <Icon name="arrow-left" size={24} onPress={()=>navigation.goBack()} />
        <Text style={{ color: COLORS.primary, fontWeight: 'bold', fontSize: 16 }}>
          Clients
        </Text> 
        <Image source={require('../../assets/icons/user.png')}
          style={{ height: 30, width: 30, borderRadius: 15 }} />
      </View> 
      <ScrollView showsHorizontalScrollIndicator={false}>
       
          <View style={{ marginTop: 20 }}>
          {client.map(po => (
        <TouchableOpacity onPress={() => { navigation.navigate('SalesArticle');dispatch(getnomfour(po.Nom_Clt)) }} style={{ marginBottom: 10, height: 140 }}>

          <View style={{ flex: 1, padding: 20 }}>
            <View style={[
              StyleSheet.absoluteFillObject,
              { backgroundColor: '#97C6B1', borderRadius: 16 }]} />
            <Text style={styles.name}>{po.Nom_Clt}</Text>
            <Text style={styles.desc}>{po.Adr_Clt}</Text>
            <Text style={styles.desc}>ttt</Text>
            <Icon name="user" size={76} color='#FFF' style={{ bottom: 0.5, right: 10, position: 'absolute' }} />
          </View>
        </TouchableOpacity>
      ))}
        </View>
      </ScrollView>
          </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  name: {
    fontWeight: '700',
    fontSize: 18,
  }, desc: {
    fontSize: 11,
    opacity: 0.7,
  },
  bg: {
    position: 'absolute',
    backgroundColor: 'red',
    width: '100%',
    height: '100%',
    transform: [{ translateY: 700 }],
    borderRadius: 32,
  }, header: {
    padding: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',

  }
});


export default Basic;