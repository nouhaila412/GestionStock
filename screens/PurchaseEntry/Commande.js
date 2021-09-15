import React from 'react'
import { View, Text, Image, ImageBackground, ScrollView, TextInput, TouchableOpacity, StyleSheet } from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome5';
import { DataTable } from 'react-native-paper';
import { getPost ,getCom,geton,getvar,getart} from "../../Action";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";

const Home = ({ navigation }) => {

  const p = useSelector((state) => state.posts);
      const ar = useSelector((state) => state.articles);

  const dispatch = useDispatch();
const [variabl,setVariable] = React.useState(3)

React.useEffect(() => {
     dispatch(getart());
   }, []);

 React.useEffect(() => {
       dispatch(getvar(variabl));
     }, [variabl]);
  React.useEffect(() => {
     dispatch(getPost());
   }, []);
  return (
    <View style={{
      backgroundColor: "#FFF",
      flex: 1
    }}>

      <View style={{

      }}>
        <Icon
          name='arrow-left'
          size={25}
          style={{

            marginTop: 25,
            marginLeft: 20
          }}
          color={'#9A9A9A'}
          onPress={() => {
            navigation.goBack()
          }}
        />
        <View style={{ justifyContent: 'center', alignItems: 'center' }}>
          <Image
            source={require('../../assets/Logo.png')}
            style={styles.logo}
          />
        </View>

        <Text style={{
          fontSize: 28,
          color: "#33",
          fontWeight: "bold",
          marginTop: -35,
          textAlign: 'center'
        }}>Liste des commandes</Text>

      </View>

      <DataTable style={styles.table}>
        <DataTable.Header >
          <DataTable.Title
            style={{ fontFamily: "serif" }}
            style={{ fontSize: "12px" }}
          >
            Réf
          </DataTable.Title>
          <DataTable.Title>four</DataTable.Title>
          <DataTable.Title>date</DataTable.Title>
          <DataTable.Title numeric>prix</DataTable.Title>
        </DataTable.Header>
        {p.map((po,i) => (
          
          <DataTable.Row key={i} onPress={()=>{navigation.navigate('Product');setVariable(po.Num_Ord)}}> 
            <DataTable.Cell>{po.Num_Ord}</DataTable.Cell>
            <DataTable.Cell>{po.Typ_Pie}</DataTable.Cell>
            <DataTable.Cell numeric>{po.Dat_Liv}</DataTable.Cell>
            <DataTable.Cell numeric>{po.Num_Ser}</DataTable.Cell>
          </DataTable.Row>
        ))}



      </DataTable>



    </View>
  )
}
export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF'
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10
  },
  actionButtonIcon: {
    fontSize: 20,
    height: 22,
    color: 'white',
  },
  logo: {
    height: 200,
    width: 200,
    resizeMode: 'contain',
    marginTop: -35
  }, table: {
    backgroundColor: "white",
    //boxShadow: "black 0px 0px 4px 0.1px",
    padding: 20,

  }
});