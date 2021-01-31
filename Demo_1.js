import * as React from 'react';
import { View, Text, StyleSheet, SafeAreaView, StatusBar } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

function HomeScreen() {
  return (
    <>
      <SafeAreaView style={styles.topSafeArea} />
      <SafeAreaView style={styles.bottomSafeArea}>
        <StatusBar barStyle="light-content" />

        <View style={{ height: hp('50%'), backgroundColor: 'red' }}></View>

        <View
          style={{
            flex: 1,
            alignItems: 'center',
            justifyContent: 'flex-start',
          }}>
          <Text>Home Screen</Text>
        </View>
      </SafeAreaView>
    </>
  );
}

function DetailsScreen() {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Details Screen</Text>
    </View>
  );
}

const Stack = createStackNavigator();

function Demo_1() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Home"
        mode="card"
        screenOptions={{
          headerShown: false,
        }}>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Details" component={DetailsScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const THEME_COLOR = '#285E29';

const styles = StyleSheet.create({
  topSafeArea: {
    flex: 0,
    backgroundColor: 'blue',
  },
  bottomSafeArea: {
    flex: 1,
    backgroundColor: THEME_COLOR,
  },
});

export default Demo_1;

// https://webomnizz.com/change-status-bar-background-color-in-react-native/