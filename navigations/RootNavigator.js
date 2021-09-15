import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import Home from "../screens/SplashScreen";
import Login from "../screens/Login";
import SuppliersList from "../screens/PurchaseEntry/SuppliersList";
import ClientsList from "../screens/SalesEntry/ClientsList";
import EntryDetails from "../screens/PurchaseEntry/EntryDetails";
import MainMenu from '../components/Tabs';
import Entry from '../screens/PurchaseEntry/Entry';
import BonReception from "../screens/PurchaseEntry/BonReception";
import BonLivraison from "../screens/SalesEntry/BonLivraison";
import ProductDetails from '../screens/PurchaseEntry/ProductDetails';
import Scan from '../screens/BarCode/Scan';
import ScanEntry from '../screens/BarCode/ScanEntry';
import Card from '../components/Card';
import Product from '../screens/PurchaseEntry/Product';
import MainScreen from '../screens/MainScreen';
import Commande from '../screens/PurchaseEntry/Commande';
import SalesCommande from '../screens/PurchaseEntry/Commande';
import ProductSales from '../screens/SalesEntry/Product';
import ProductSalesDetails from '../screens/SalesEntry/ProductDetails';
import Article from "../screens/PurchaseEntry/AddProduct";
import SalesArticle from "../screens/SalesEntry/AddProduct";
import ProductCard from '../components/ProductCard';
import CardArticle from '../components/CardArticle'
import Output from '../screens/SalesEntry/Output';
import OutputDetails from '../screens/SalesEntry/OutputDetails';



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
          <Stack.Screen name="ClientsList" component={ClientsList} />
          <Stack.Screen name="EntryDetails" component={EntryDetails} />
          <Stack.Screen name="MainMenu" component={MainMenu} />
          <Stack.Screen name="Entry" component={Entry} />
          <Stack.Screen name="BonReception" component={BonReception} />
          <Stack.Screen name="BonLivraison" component={BonLivraison} />
          <Stack.Screen name="ProductDetails" component={ProductDetails} />
          <Stack.Screen name="Scan" component={Scan} />
          <Stack.Screen name="ScanEntry" component={ScanEntry} />
          <Stack.Screen name="Product" component={Product} />
          <Stack.Screen name="Card" component={Card} />
          <Stack.Screen name="Commande" component={Commande} />
          <Stack.Screen name="SalesCommande" component={SalesCommande} />
          <Stack.Screen name="Output" component={Output} />
          <Stack.Screen name="OutputDetails" component={OutputDetails} />
          <Stack.Screen name="ProductSales" component={ProductSales} />
          <Stack.Screen name="ProductSalesDetails" component={ProductSalesDetails} />
          <Stack.Screen name="MainScreen" component={MainScreen} />
          <Stack.Screen name="Article" component={Article} />
          <Stack.Screen name="SalesArticle" component={SalesArticle} />
          <Stack.Screen name="ProductCard" component={ProductCard} />
          <Stack.Screen name="CardArticle" component={CardArticle} />




        </Stack.Navigator>
      );
}
  
}