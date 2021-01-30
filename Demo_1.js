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
  FlatList,
  ImageBackground,
} from 'react-native';

function Demo_1() {
  return (
    <>
      <View style={styles.container}>
        <ImageBackground
          source={require('./Images/kamome.png')}
          style={styles.image}>
          <Text>aaaaa</Text>
        </ImageBackground>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
  },
  image: {
    flex: 1,
    resizeMode: 'cover',
  },
});

export default Demo_1;
