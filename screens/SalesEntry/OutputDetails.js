import React, { useState } from 'react';
import { ScrollView } from 'react-native';
import { View, Text, StyleSheet, TouchableHighlight } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import * as Animatable from 'react-native-animatable';
import { Input } from 'react-native-elements/dist/input/Input';
import DatePicker from 'react-native-datepicker';
import { useSelector, useDispatch } from "react-redux";
import axios from "axios";
import { Root,Popup } from "popup-ui";
import COLORS from '../../utils/Colors'

const DURATION = 400;
const EntryDetails = ({ navigation }) => {
  /* const { po } = route.params;
  const { code } = route.params; */
  const nomf = useSelector((state) => state.nomfour);

  const [date, setDate] = useState(new Date());

  const [liv,setLiv] = useState([])

  const ind = useSelector((state) => state.indice);
  const [ent, setent] = React.useState([])
    const [fr, setfr] = React.useState([])

fr.Code_Fou=nomf

 ent.Qte_Liv= liv
  const [arti, setArti] = React.useState([])
  React.useEffect(() => {
    axios.get(`http://1af3-196-206-107-185.ngrok.io/apiProduit_Art/${ind}`)
      .then((res) => {
        setArti(res.data)


      })
      .catch((error) => {
        console.error(error);
      });
       axios.get(`http://1af3-196-206-107-185.ngrok.io/apistock_lig_Pie/1`)
      .then((res) => {
        setent(res.data)



      })
      .catch((error) => {
        console.error(error);
      });
       axios.get(`http://1af3-196-206-107-185.ngrok.io/apistock_ent_pie/1`)
      .then((res) => {
        setfr(res.data)
         

       })
      .catch((error) => {
        console.error(error);
      });





  }, []);

  const validerent =()=>{
    return axios.post('http://1af3-196-206-107-185.ngrok.io/apistock_lig_Pie/', ent)
  .then(function (response) {
    console.log(response);
  })
  .catch(function (error) {
    console.log(error);
  });
  }
  const validerfr =()=>{
    return axios.post('http://1af3-196-206-107-185.ngrok.io/apistock_ent_pie/', fr)
  .then(function (response) {
response.Code_Fou=nomf
    console.log(response);

  })
  .catch(function (error) {
    console.log(error);
  });
  }
  return (
    <Root>
    <View style={{ flex: 1 }}>

      <View
        style={[
          StyleSheet.absoluteFillObject,
          { backgroundColor: '#D7E5EB', borderRadius: 16, height: 190 }
        ]}
      />
      <Text style={styles.name}>Fournisseur: {nomf}</Text>
      <Text style={styles.desc}></Text>
      <Text style={styles.desc}></Text>
      <Icon
        name='arrow-left'
        size={25}
        style={{

          marginTop: -5,
          marginLeft: 30
        }}
        color={'#9A9A9A'}
        onPress={() => {
          navigation.goBack()
        }}
      />
      <Icon name="user" color={COLORS.dark} size={76} style={{ bottom: 0.5, right: 10, position: 'absolute', top: 83 }} />
      <View style={styles.bg}>
        <ScrollView>
          <Animatable.View
            animation='bounceIn'
            delay={DURATION}
          >
            <View style={{
              paddingHorizontal: 32,
              alignSelf: "center",
              marginTop: -36,
              alignItems: 'center',
              width: '100%'
            }}>


              <View style={{
                flexDirection: "row",
                marginTop: 30,
                alignItems: "center"
              }}>
                <Text style={{
                  fontFamily: "RobotoRegular",
                  color: "#a2a2db",
                  paddingRight: 120,
                  paddingTop: 5,
                  fontSize: 16
                }}>
                  Référence du produit:
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
                    width: 310,
                    marginTop: 10
                  }}
                >
                  <Input

                    value={arti.Cod_Art}
                  />
                </View>
              </View>
              <View style={{
                flexDirection: "row",
                marginTop: 5,
                alignItems: "center"
              }}>
                <Text style={{
                  fontFamily: "RobotoRegular",
                  color: "#a2a2db",
                  paddingRight: 110,
                  fontSize: 16
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
                    width: 310,
                    marginTop: 10
                  }}
                >
                  <Input
                    rightIcon={<Icon
                      name='barcode'
                      size={24}
                      color="#666"


                    />} value={arti.Lib_Art}
                  />


                </View>
              </View>

              <View style={{
                flexDirection: "row",
                marginTop: 10,
                alignItems: "center"
              }}>
                <Text style={{
                  fontFamily: "RobotoRegular",
                  color: "#a2a2db",
                  paddingRight: 36,
                  fontSize: 16
                }}>
                  Date d'entrée:
                </Text>
                <DatePicker
                  style={styles.datePickerStyle}
                  date={date} // Initial date from state
                  mode="date" // The enum of date, datetime and time
                  placeholder="select date"
                  format="DD-MM-YYYY"
                  minDate="01-01-2016"
                  maxDate="01-01-2019"
                  confirmBtnText="Confirm"
                  cancelBtnText="Cancel"
                  customStyles={{
                    dateIcon: {
                      //display: 'none',
                      position: 'absolute',
                      left: 0,
                      top: 4,
                      marginLeft: 0,
                    },
                    dateInput: {
                      marginLeft: 36,
                    },
                  }}
                  onDateChange={(date) => {
                    setDate(date);
                  }}
                />
              </View>
              <Text style={{
                fontSize: 17,
                marginTop: 25, marginVertical: 16,
                color: COLORS.background
              }}>
                - - - - - - - - -  - - - -  - - - - - - -  -
              </Text>
              <View style={{
                flexDirection: "row",
                alignItems: "center",
                marginTop: -20
              }}>
                <Text
                  style={{
                    fontFamily: "RobotoRegular",
                    color: "#a2a2db",
                    fontSize: 16,
                    marginLeft: 30
                  }}>
                  Qte Livrée
                </Text>

                <View
                  style={{
                    paddingHorizontal: 5,
                    paddingVertical: 5,
                    width: 230,
                    paddingLeft: 39
                  }}
                >
                  <Input
                      onChangeText={(e) => setLiv(e)}
                  />
                      
                </View>
              </View>


              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'space-evenly',
                  marginTop: 20
                }}

              >
                <View
                  style={{
                    backgroundColor: '#44FEA1',
                    height: 64,
                    width: 64,
                    borderRadius: 32,
                    marginLeft: 30,
                    justifyContent: 'center',
                    alignItems: 'center',


                  }}
                >
                  <Icon onPress={ ()=>{validerfr(); Popup.show({
                  type: 'Success',
                  title: 'Entrée de stock',
                  button: true,
                  textBody: 'Votre ajout a été effectué par succès',
                  buttontext: 'Ok',
                  callback: () => Popup.hide()
                }) }      } name="check" size={26} color={'white'}></Icon>
                </View>
                <View
                  style={{
                    backgroundColor: '#ef5350',
                    height: 64,
                    width: 64,
                    borderRadius: 32,
                    marginLeft: 30,
                    justifyContent: 'center',
                    alignItems: 'center'


                  }}
                >
                  <Icon name="times" size={26} color={'white'}></Icon>

                </View>

              </View>

            </View>
          </Animatable.View>
        </ScrollView>
      </View>

    </View>
    </Root>
  )
}
export default EntryDetails;

const styles = StyleSheet.create({
  separator: {
    height: 1,
    width: "100%",
    backgroundColor: '#ff0000',
  },
  separateHero: {
    height: '100vh'
  },
  header: {
    backgroundColor: 'red',
    width: '100vw',
    height: 45,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20
  },
  headerText: {
    color: '#fff',
    fontSize: 18
  },
  footer: {
    backgroundColor: 'white',
    width: '100vw',
    height: 45,
    justifyContent: 'center',
    alignItems: 'center',
    bottom: 0
  },
  footerText: {
    color: '#000',
    fontSize: 18
  },
  name: {
    fontWeight: '700',
    fontSize: 17,
    position: 'absolute',
    top: 110,
    left: 20,
    color: "#3C99DC"
  }, desc: {
    fontSize: 11,
    opacity: 0.7,
  },
  bg: {
    position: 'absolute',
    backgroundColor: 'white',
    width: '100%',
    height: '100%',
    transform: [{ translateY: 160 }],
    borderRadius: 32,
    padding: 10,
    paddingTop: 42,
  }
});
