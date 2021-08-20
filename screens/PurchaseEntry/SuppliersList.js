import React from 'react';
import { TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import { StyleSheet, Text,  SafeAreaView, View, FlatList, Platform, SafeAreaProvider} from "react-native";
const MarvelList = [
  {id: 1, name: 'Fournisseur XX1'},
  {id: 2, name: 'Fournisseur XX2'},
  {id: 3, name: 'Fournisseur XX3'},
  {id: 4, name: 'Fournisseur XX4'},
  {id: 5, name: 'Fournisseur XX5'},
  {id: 6, name: 'Fournisseur XX6'},
  {id: 7, name: 'Fournisseur XX7'},
  {id: 8, name: 'Fournisseur XX8'},
  {id: 9, name: 'Fournisseur XX9'},
  {id: 10, name: 'Fournisseur XX10'},
  {id: 11, name: 'Fournisseur XX11'},
  {id: 12, name: 'Fournisseur XX12'},
  {id: 13, name: 'Fournisseur XX13'},
  {id: 14, name: 'Fournisseur XX14'},
  {id: 15, name: 'Fournisseur XX15'},
  {id: 16, name: 'Fournisseur XX16'},
  {id: 17, name: 'Fournisseur XX17'},
  {id: 18, name: 'Fournisseur XX18'},
  {id: 19, name: 'Fournisseur XX19'},
  {id: 20, name: 'Fournisseur XX20'},
  
  ];
const ITEM_HEIGHT = -100 * 0.18;
const myKeyExtractor = (item) => {
  return item.id
}

const renderItem = ({item}) => {
  return <View><Text>{item.name}</Text></View>
}

const Header = () => {
  return (
    <View style={styles.header}>
      <Text style={styles.headerText}>
        Marvel list
      </Text>
    </View>
  )
}

const Footer = () => {
  return (
    <View style={styles.footer}>
      <Text style={styles.footerText}>
        Thanks for reading!
      </Text>
    </View>
  )
}

const Basic = ({navigation}) => {
  
  // const navigation = useNavigation(); 
      return (
        <SafeAreaView style={{flex: 1}}>
          
          <FlatList
            style={{marginTop: 35}}
            data={MarvelList}
            keyExtractor={myKeyExtractor}
            contentContainerStyle={{padding: 10}}
            renderItem={({item}) =>{
              return <TouchableOpacity onPress={()=>{navigation.navigate('EntryDetails',{item})}} style={{marginBottom: 10, height: 140}}>
                  <View style={{flex:1, padding:20}}>
                    <View style={[
                      StyleSheet.absoluteFillObject,
                      {backgroundColor: '#97C6B1', borderRadius: 16}]} />
                    <Text style={styles.name}>{item.name}</Text>
                    <Text style={styles.desc}>{item.id}</Text>
                    <Text style={styles.desc}>{item.id}</Text>
                    <Icon name="user" size={76} color='#FFF' style={{bottom: 0.5,right: 10, position:'absolute'}}/>
                  </View>
              </TouchableOpacity>
            }}
            
          />
         <View style={styles.bg}/>
        </SafeAreaView>
        )
    }

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
    name:{
      fontWeight: '700',
      fontSize: 18,
    }, desc:{
      fontSize: 11,
      opacity: 0.7,
    },
    bg:{
      position: 'absolute',
      backgroundColor:'red',
      width: '100%',
      height: '100%',
      transform: [{ translateY: 700}],
      borderRadius: 32,
    }
});


export default Basic;