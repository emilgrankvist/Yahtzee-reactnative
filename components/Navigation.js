import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
// import Icon from 'react-native-vector-icons/FontAwesome5';
import { AntDesign } from '@expo/vector-icons';
import Home from './Home';
import Gameboard from './Gameboard';
import Scoreboard from './Scoreboard';
import { createStackNavigator } from '@react-navigation/stack';



const HomeScreen = () => {
  return(
      <Home />
  );
}

const GameScreen  = () => {
  return(
      <Gameboard />
  );
}

const ScoreScreen = () => {
  return(
      <Scoreboard />
  ); 
}

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

export default function Navigation() {

  return (
    <NavigationContainer>
      
        <Tab.Navigator
          screenOptions={({route}) => ({
            tabBarIcon: ({focused,color,size}) => {
              let iconName;
              let iconColor;
              let iconSize = 20;

              if (route.name === 'HomeScreen') {
                iconName = focused ? 'home' : 'home',
                iconColor = focused ? 'black' : 'gray'
              
              } else if (route.name === 'GameScreen') {
                iconName = focused ? 'shoppingcart' : 'shoppingcart'
                iconColor = focused ? 'black' : 'gray'
              }
              else if (route.name === 'ScoreScreen') {
                iconName = focused ? 'picture' : 'picture'
                iconColor = focused ? 'black' : 'gray'
              }

              return <AntDesign name={iconName} size={iconSize} color={iconColor} />
            },
            tabBarActiveTintColor: 'green',
            tabBarInactiveBackgroundColor: 'white',
            tabBarShowLabel: false,
            tabBarStyle: {position: 'absolute'}
          })}
        >
          
        <Tab.Screen name='HomeScreen' component={HomeScreen} />
        <Tab.Screen name='GameScreen' component={GameScreen} />
        <Tab.Screen name='ScoreScreen' component={ScoreScreen} />
  
      </Tab.Navigator>
      
    </NavigationContainer>
  );

}
