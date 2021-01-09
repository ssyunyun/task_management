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
  ScrollView,
} from 'react-native';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

import task_styles from '../Styles/task_style'
import Task_modal from '../Components/Task_modal'

import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

function CharacterScreen({ navigation, route }) {

  return (
    <>
      <ScrollView
        contentInsetAdjustmentBehavior="automatic"
        style={styles.scrollView}>
        <Text>CharacterScreen</Text>
        {/*
        <View >
          <View style={task_styles.task_position_view}>
            <View style={{ padding: wp('4%') }}>
              <TouchableOpacity
                underlayColor="#fff"
                onPress={() => setmodalVisible(true)}>
                <Image
                  source={require('../Images/fushigidane.jpg')}
                />
              </TouchableOpacity>
            </View>

            <View style={{ padding: wp('4%') }}>
              <TouchableOpacity
                underlayColor="#fff"
                onPress={() => setmodalVisible(true)}>
                <Image
                  source={require('../Images/fushigidane.jpg')}
                />
              </TouchableOpacity>
            </View>

            <View style={{ padding: wp('4%') }}>
              <TouchableOpacity
                underlayColor="#fff"
                onPress={() => setmodalVisible(true)}>
                <Image
                  source={require('../Images/fushigidane.jpg')}
                />
              </TouchableOpacity>
            </View>

            <View style={{ padding: wp('4%') }}>
              <TouchableOpacity
                underlayColor="#fff"
                onPress={() => setmodalVisible(true)}>
                <Image
                  source={require('../Images/fushigidane.jpg')}
                />
              </TouchableOpacity>
            </View>

            <View style={{ padding: wp('4%') }}>
              <TouchableOpacity
                underlayColor="#fff"
                onPress={() => setmodalVisible(true)}>
                <Image
                  source={require('../Images/fushigidane.jpg')}
                />
              </TouchableOpacity>
            </View>

            <View style={{ padding: wp('4%') }}>
              <TouchableOpacity
                underlayColor="#fff"
                onPress={() => setmodalVisible(true)}>
                <Image
                  source={require('../Images/fushigidane.jpg')}
                />
              </TouchableOpacity>
            </View>

          </View>
        </View>
        */}
      </ScrollView>
    </>
  );
}

const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: Colors.lighter,
  },
  engine: {
    position: 'absolute',
    right: 0,
  },
  body: {
    backgroundColor: Colors.white,
  },
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
    color: Colors.black,
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
    color: Colors.dark,
  },
  highlight: {
    fontWeight: '700',
  },
  footer: {
    color: Colors.dark,
    fontSize: 12,
    fontWeight: '600',
    padding: 4,
    paddingRight: 12,
    textAlign: 'right',
  },
});


export default  CharacterScreen;