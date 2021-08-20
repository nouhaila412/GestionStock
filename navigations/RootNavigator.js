import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import Home from "../screens/SplashScreen";
import Login from "../screens/Login";
import SuppliersList from "../screens/PurchaseEntry/SuppliersList";
import EntryDetails from "../screens/PurchaseEntry/EntryDetails";
import MainMenu from '../components/Tabs';
import Entry from '../screens/PurchaseEntry/Entry';
import BonReception from "../screens/PurchaseEntry/BonReception";
import ProductDetails from '../screens/PurchaseEntry/ProductDetails';
import Scan from '../screens/BarCode/Scan';
import ScanEntry from '../screens/BarCode/ScanEntry';
import Card from '../components/Card';
import Product from '../screens/PurchaseEntry/Product';
import MainScreen from '../screens/MainScreen';


const Stack = createStackNavigator();
export default class RootNavigator extends React.Component {
render(){
    return (
        <Stack.Navigator 
        headerMode='none'
        initialRouteName='SplashScreen'
        >
          <Stack.Screen name="SplashScreen" component={Home} />
          <Stack.Screen name="Login" component={Login} />
          <Stack.Screen name="SuppliersList" component={SuppliersList} />
          <Stack.Screen name="EntryDetails" component={EntryDetails} />
          <Stack.Screen name="MainMenu" component={MainMenu} />
          <Stack.Screen name="Entry" component={Entry} />
          <Stack.Screen name="BonReception" component={BonReception} />
          <Stack.Screen name="ProductDetails" component={ProductDetails} />
          <Stack.Screen name="Scan" component={Scan} />
          <Stack.Screen name="ScanEntry" component={ScanEntry} />
          <Stack.Screen name="Product" component={Product} />
          <Stack.Screen name="Card" component={Card} />
          <Stack.Screen name="MainScreen" component={MainScreen} />


        </Stack.Navigator>
      );
}
  
}