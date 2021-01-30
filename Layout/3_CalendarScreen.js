import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  Image,
  Button,
  TouchableOpacity,
  Alert,
  ImageBackground
} from 'react-native';
import { Calendar } from 'react-native-calendars';

import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

function CalendarScreen({ navigation, route }) {

  console.log('calendarScreen')

  return (
    <>
      <ImageBackground
      source={require('../Images/back.jpg')}
      style={styles.image}>
      <Calendar />
      </ImageBackground>
    </>
  );
}

const styles = StyleSheet.create({
  image: {
    height: hp('100%'),
    resizeMode: 'cover',
  }
})

export default  CalendarScreen;