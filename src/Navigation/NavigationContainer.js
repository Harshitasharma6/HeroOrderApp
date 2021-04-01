import React,{Component} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Image,
  TouchableOpacity,
  Text,
  StatusBar,
} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Login from '../MainScreen/Login';
import BillTo from '../MainScreen/BillTO';
import NewOrder from '../MainScreen/NewOrder';
import Order from '../MainScreen/Order';
import OrderPlacedSuccess from '../MainScreen/OrderPlacedSuccess';
import EcoMotors from '../MainScreen/ChennaiEcoMotors';
import orderHeader from '../MainScreen/OrderHeader';
import NewOrdersScreen from '../MainScreen/NewOrdersScreen';
import OrderDetailScreen from '../MainScreen/OrderDetailScreen';
import chasisNumber from '../MainScreen/ChasisNumber';
const Stack = createStackNavigator();

function Root(){
    return(
        <NavigationContainer>
      <Stack.Navigator
      initialRouteName="Login"
      screenOptions={{
     headerShown: false
   }}
   >
       <Stack.Screen name="Login" component={Login} />
       <Stack.Screen name="BillTo" component={BillTo} />
       <Stack.Screen name="NewOrder" component={NewOrder} />
       <Stack.Screen name="OrderPlacedSuccess" component={OrderPlacedSuccess} />
       <Stack.Screen name="Order" component={Order} />
       <Stack.Screen name="EcoMotors" component={EcoMotors} />
       <Stack.Screen name="orderHeader" component={orderHeader} />
       <Stack.Screen name="NewOrdersScreen" component={NewOrdersScreen} />
       <Stack.Screen name="OrderDetailScreen" component={OrderDetailScreen} />
       <Stack.Screen name="chasisNumber" component={chasisNumber} />
     </Stack.Navigator>
     </NavigationContainer>
    );
  }
export default Root;