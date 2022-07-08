/**
 * Main container which renders all the screens
 */
//importing React, Components and other libraries
import 'react-native-gesture-handler';
import React,{ useEffect, createContext, useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import appStyle from './app/style/app.style';
import { Colors } from './app/style/colors';
import ListScreen from './app/screens/ListScreen';
import DetailsScreen from './app/screens/DetailsScreen';

const Stack = createNativeStackNavigator();   //creating Stack navigator
export const ActiveContext = createContext();  //creating a context variable to store internet status

export default function App() {
  const [active, setActive] = useState(true);

  //showing Online status in header is internet is active
  const onlineTextDisplay =()=> {
    return (
      <>
        {
          active 
          ? <Text style={appStyle.online}>Online</Text>
          : <Text style={appStyle.offline}>OffLine</Text>
        }
      </>
    );
  };

  //rendering the UI with two screens
  return (
    <SafeAreaView style={appStyle.container}>
      <StatusBar barStyle="dark-content" backgroundColor={Colors.backgroundBlue}/>
      <ActiveContext.Provider value={{active, setActive}}>
        <NavigationContainer>
          <Stack.Navigator>   
            <Stack.Screen name='ListScreen' component={ListScreen} options={{ title: 'Users', headerRight:onlineTextDisplay }}/>
            <Stack.Screen name='DetailsScreen' component={DetailsScreen} options={{ title: 'Users Details' }}/>
          </Stack.Navigator>
        </NavigationContainer>
      </ActiveContext.Provider>
    </SafeAreaView>
  );
};