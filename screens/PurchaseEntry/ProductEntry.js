import { ThemeProvider } from '@react-navigation/native';
import React, { Component } from 'react';
import { View, Text, ScrollView, StyleSheet ,Button} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import ActionButton from 'react-native-action-button';
import Svg from 'react-native-svg';
import CardFour from '../../components/CardFour'
import { useSelector, useDispatch } from "react-redux";


const Article = ({navigation}) => {

   const artfour = useSelector((state) => state.artfour);


    return (

        <View style={{ flex: 1, backgroundColor: '#f3f3f3' }}>
            <Svg style={StyleSheet.absoluteFill} viewBox="0 0 375 100">
                {/* <Path d={d} fill={"#3299BB"} /> */}
            </Svg>
            {/* Rest of the app comes ABOVE the action button component !*/}
            <Button buttonColor="#3299BB" title= "Ajouter" onPress={() => { navigation.navigate('ProductCard') }} />

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
                    size={25} color="#FFFF" style={{ width: 20 }} />

          <Text
                    style={{
                        fontSize: 25,
                        color: "#f8991d",
                        fontFamily: "RobotoBold",
                        marginTop: 10,
                        marginBottom: -15,
                        marginLeft: 70
                    }}
                >
                    Liste des Articles 
                </Text>
        </View>

        { artfour.map((artf) => (
             <CardFour ar={artf} />
        ))}
    
         
        <ScrollView
          showsVerticalScrollIndicator={false}
          style={{
            marginVertical: 5,
            marginTop: 20
          }}
        >
          
          

          
        </ScrollView>
        </View>


    );
}

export default Article;