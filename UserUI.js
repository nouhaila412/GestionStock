import React from 'react';
import { View, StyleSheet, Image, Text, TouchableOpacity } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/FontAwesome5';

const UserProfil = ({navigation}) => {
  return (
    <View>

      <View
        style={[
          StyleSheet.absoluteFillObject,
          { backgroundColor: '#96BDC6', borderRadius: 16, height: 190, marginTop: -20 }
        ]}
        
      />
      <TouchableOpacity onPress={()=> navigation.goBack()}>
                <Image
                    source={require('./assets/icons/1.png')}
                    style={{
                        height: 10,
                        width: 20,
                        marginTop: 25,
                        marginLeft: 30
                    }}
                />
                </TouchableOpacity>
      <View style={{ width: "100%" }}>
        <Text style={{
          fontSize: 28,
          color: "#FFF",
          fontWeight: "bold",
          marginTop: 15,
          textAlign: 'center'
        }}>User Profil</Text>
      </View>
      
      <View style={{ alignItems: 'center' }}>
        <Image source={require("./assets/icons/user.png")}
          style={{
            width: 100, height: 100, borderRadius: 100, marginTop: 19,
            shadowColor: "#000",
            shadowOffset: {
              width: 0,
              height: 2,
            },
            shadowOpacity: 0.25,
            shadowRadius: 3.84,
          }}
        />
      </View>
       <ScrollView>
          <View style={{
            alignSelf: 'center',
            flexDirection: 'row',
            justifyContent: 'center',
            backgroundColor: '#fff',
            width: '90%',
            padding: 20,
            paddingBottom: 22,
            borderRadius: 10,
            shadowOpacity: 80,
            elevation: 15,
            marginTop: 40
          }}>
           <Icon name="user" size={17} color='#818181'></Icon>
           <Text style={{fontSize:15,color:'#818181',fontWeight:'bold',marginLeft:20}}>Product Designer</Text>
          </View>
          <View style={{
            alignSelf: 'center',
            flexDirection: 'row',
            justifyContent: 'center',
            backgroundColor: '#fff',
            width: '90%',
            padding: 20,
            paddingBottom: 22,
            borderRadius: 10,
            shadowOpacity: 80,
            elevation: 15,
            marginTop: 20
          }}>
           <Icon name="store-alt" size={17}color='#818181' ></Icon>
           <Text style={{fontSize:15,color:'#818181',fontWeight:'bold',marginLeft:20}}>Product Designer</Text>
          </View>
          <View style={{
            alignSelf: 'center',
            flexDirection: 'row',
            justifyContent: 'center',
            backgroundColor: '#fff',
            width: '90%',
            padding: 20,
            paddingBottom: 22,
            borderRadius: 10,
            shadowOpacity: 80,
            elevation: 15,
            marginTop: 20
          }}>
           <Icon name="envelope" size={17} color='#818181'></Icon>
           <Text style={{fontSize:15,color:'#818181',fontWeight:'bold',marginLeft:20}}>Product Designer</Text>
          </View>
          <View style={{
            alignSelf: 'center',
            flexDirection: 'row',
            justifyContent: 'center',
            backgroundColor: '#fff',
            width: '90%',
            padding: 20,
            paddingBottom: 22,
            borderRadius: 10,
            shadowOpacity: 80,
            elevation: 15,
            marginTop: 20,
            marginBottom: 40
          }}>
           <Icon name="phone-alt" size={17} color='#818181'></Icon>
           <Text style={{fontSize:15,color:'#818181',fontWeight:'bold',marginLeft:20}}>Product Designer</Text>
          </View>
       </ScrollView>


    </View>


  )
}

export default UserProfil;