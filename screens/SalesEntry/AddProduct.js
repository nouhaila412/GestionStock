import { ThemeProvider } from '@react-navigation/native';
import React, { Component } from 'react';
import { View, Text, ScrollView, StyleSheet, Image, SafeAreaView, Button } from 'react-native';
import Svg, { Defs, LinearGradient, Stop, Path } from 'react-native-svg';
import { Dimensions } from 'react-native';
import COLORS from '../../utils/Colors';
import ActionButton from 'react-native-action-button';
import Icon from 'react-native-vector-icons/FontAwesome5';
import CardArticle from '../../components/CardSalesArticle';
import { useSelector, useDispatch } from "react-redux";
import { useNavigation } from '@react-navigation/native';
const ListArticle = ({}) => {
  const artfour = useSelector((state) => state.artfour);
  const navigation = useNavigation();
  return (
    <SafeAreaView style={{ flex: 1, color: COLORS.white }}>
      <View style={styles.header}>
        <Icon name="arrow-left" size={24} onPress={()=> navigation.goBack()}/>
        <Text style={{ color: COLORS.primary, fontWeight: 'bold', fontSize: 16 }}>
          Ajouter Articles
        </Text>
        <Image source={require('../../assets/icons/addProduct.png')}
          style={{ height: 35, width: 35, borderRadius: 15 }} />
      </View>  
      <ScrollView showsHorizontalScrollIndicator={false}>
        <View style={styles.mainContainer}>
          <View style={{ marginTop: -10 }}>
          { artfour.map((artf) => (
             <CardArticle ar={artf} />
        ))}
          </View>
        </View>
      </ScrollView>
      <Button  buttonColor='#2bbbff' title="Ajouter" onPress={() => navigation.navigate('ProductCard') }>
        </Button>
    </SafeAreaView>

  );
}

export default ListArticle;

const styles = StyleSheet.create({
  svgBackground: {
    position: 'absolute',
    top: -150,
  },
  header: {
    padding: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',

  },mainContainer: {
    minHeight: 650,
    backgroundColor: COLORS.light,
    marginTop: 20,
    borderTopLeftRadius: 40,
    borderTopRightRadius: 40,
    paddingHorizontal: 20,
    paddingVertical: 40
  }
});