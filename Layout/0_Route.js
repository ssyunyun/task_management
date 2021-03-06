/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {Component} from 'react';

/* React Navigation */
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import 'react-native-gesture-handler';

/* Screen */
import HomeScreen from './1_HomeScreen';
import TaskScreen from './2_TaskScreen';
import CalendarScreen from './3_CalendarScreen';
import CharacterScreen from './4_CharacterScreen';
import SettingScreen from './5_SettingScreen';

const Stack = createStackNavigator();

function Routing() {
  return (
    <NavigationContainer>
      {/* アプリ起動時の画面 */}
      <Stack.Navigator
        initialRouteName="Home"
        mode="card"
        screenOptions={{
          headerShown: false,
        }}>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Task" component={TaskScreen} />
        <Stack.Screen name="Calendar" component={CalendarScreen} />
        <Stack.Screen name="Character" component={CharacterScreen} />
        <Stack.Screen name="Setting" component={SettingScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default Routing;
