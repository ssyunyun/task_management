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
} from 'react-native';
import { Calendar } from 'react-native-calendars';

function CalendarScreen({ navigation, route }) {

  console.log('calendarScreen')

  return (
    <>
      <Calendar />
    </>
  );
}

export default  CalendarScreen;