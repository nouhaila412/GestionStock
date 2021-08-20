import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  Alert,
  ScrollView,
  FlatList,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import Menu, {
    MenuProvider,
    MenuOptions,
    MenuOption,
    MenuTrigger,
  } from 'react-native-popup-menu';
  
export default class Design extends Component {

  constructor(props) {
    super(props);
    this.state = {
      data: [
        {id:1, title: "Entrée et Achat", option1:"Entrées",option2:"Achats", image:"https://i.ibb.co/4P9YWMb/packing-list.png", screen1: 'Entry',screen2: 'Product'},
        {id:1, title: "Sortie et Vente", option1:"Sorties",option2:"Ventes", image:"https://i.ibb.co/DrmyGmV/invoice.png", screen1: 'SuppliersList',screen2: 'SuppliersList'},
        {id:2, title: "Inventaire",     image:"https://i.ibb.co/6mSsRDt/inventory.png"} ,
        {id:3, title: "Statistiques",     image:"https://i.ibb.co/HdkJMpB/statistics-1.png"} ,
      ]
    };
  }

  clickEventListener(item) {
    Alert.Alert(item.title)
  }

  render() {
    return (
        
      <View style={styles.container}>
          <MenuProvider >
        <Image
          source={require('../assets/icons/stock.png')}
          style={styles.logo}

        />
        <View
          style={{
            flexDirection: "row",
            marginTop: -10,
            alignItems: "center",
            textAlign: "center"
          }}
        >
          <Text
            style={{
              fontFamily: "RobotoRegular",
              color: "#3299BB",
              fontSize: 26,
              marginLeft: 100
            }}
          >
            Gestion
          </Text>

          <Text
            style={{
              fontFamily: "RobotoRegular",
              color: "#f8991d",
              fontSize: 26,
            }}
          >
            Stock
          </Text>
        </View>
        <FlatList style={styles.list}
          contentContainerStyle={styles.listContainer}
          data={this.state.data}
          horizontal={false}
          ItemSeparatorComponent={
            () => <View style={{ width: 16, backgroundColor: 'pink' }}/>
        }
          numColumns={2}
          keyExtractor= {(item) => {
            return item.id;
          }}
          renderItem={({item}) => {
            return (
              <TouchableOpacity style={[styles.card, {backgroundColor:"#ffff"}]}>
                <View style={styles.cardHeader}>
                    {item.option1 
                    ? <Menu style={{justifyContent: 'flex-end'}}>
                    <MenuTrigger >
                        <Icon name="ellipsis-v" size={17} color={'#bebebe'}></Icon>
                      </MenuTrigger>
                      <MenuOptions style={{width: 130}}>
                        <MenuOption value={1} text={item.option1} onSelect={() => this.props.navigation.navigate(item.screen1)} />
                        <MenuOption value={2} onSelect={() => this.props.navigation.navigate(item.screen2)}>
                          <Text style={{  }}>{item.option2} </Text>
                        </MenuOption>
                      </MenuOptions>
                    </Menu>
                : <Icon></Icon>
                }
                
                </View>
                <Image style={styles.cardImage} source={{uri:item.image}}/>
                <View style={styles.cardFooter}>
                  <Text style={styles.subTitle}>{item.title}</Text>
                </View>
              </TouchableOpacity>
            )
          }}/>
          
        
          </MenuProvider>
      </View>
    );
  }
  getMenuView() {
    return (
      <MenuProvider style={{ flexDirection: 'column', padding: 30 }}>
        <Menu >
        <MenuTrigger onPress={() => this._onPressItem()}>
            <Icon name="ellipsis-v" size={17} color={'#bebebe'}></Icon>
          </MenuTrigger>
          <MenuOptions>
            <MenuOption value={1} text="One" />
            <MenuOption value={2}>
              <Text style={{ color: 'red' }}>Two</Text>
            </MenuOption>
            <MenuOption value={3} disabled={true} text="Three" />
          </MenuOptions>
        </Menu>
      </MenuProvider>
    );
  }

}

const styles = StyleSheet.create({
  container:{
    flex:1,
    padding: 40,
    justifyContent: 'space-between',
  },
  list: {
    //paddingHorizontal: 5,
   // backgroundColor:"#E6E6E6",
   marginTop: 20
   
  },
  listContainer:{
    alignItems:'center',

    
  },
  /******** card **************/
  card:{
    marginHorizontal:2,
    marginVertical:2,
    flexBasis: '48%',
    padding: 20,
    borderRadius: 7,
    height: 160,
  },
  cardHeader: {
    marginBottom: 10,
    alignItems: 'flex-end'
  },
  cardContent: {
    paddingVertical: 12.5,
    paddingHorizontal: 16,
  },
  cardFooter:{
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingTop: 10,
    paddingBottom: 25,
    paddingHorizontal: 16,
    borderBottomLeftRadius: 1,
    borderBottomRightRadius: 1,
  },
  cardImage:{
    height: 70,
    width: 70,
    alignSelf:'center',
    marginTop: -10
  },
  title:{
    fontSize:14,
    flex:1,
    color:"#FFFFFF",
    fontWeight:'bold'
  },
  subTitle:{
    fontSize:14,
    flex:1,
    color:"#333",
    textAlign: 'center'
  },
  icon:{
    height: 30,
    width: 30, 
  },
  logo: {
    height: 90,
    width: 90,
    resizeMode: 'contain',
    marginLeft: 130,
    marginBottom: 20,
    marginTop: -10,


  },
  title: {
    fontSize: 30,
    color: "black",
    fontFamily: "RobotoBold",
    marginTop: -15,
    textAlign: 'center'

  }
});    