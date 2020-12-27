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
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      current: new Date().toLocaleDateString(),
    };
  }

  componentDidMount() {
    setInterval(() => {
      this.setState({
        current: new Date().toLocaleString(),
        month: new Date().getMonth() + 1,
        date: new Date().getDate(),
      });
    }, 1000);
  }

  render() {
    return (
      <>
        <SafeAreaView style={styles.container}>
          <View style={styles.date_view}>
            {/* 時刻表示 */}
            <Text style={styles.date_text}>
              {this.state.month}/{this.state.date}
            </Text>
          </View>

          {/* キャラ表示 */}
          <View style={styles.character_view}>
            <Image
              style={styles.character_size}
              source={require('./Images/nohmi.jpg')}
            />
          </View>

          {/* 画面遷移ボタン */}
          <View style={styles.button_view}>
            <TouchableOpacity
              style={styles.button}
              underlayColor="#fff"
              onPress={() => Alert.alert('hitokage')}>
              <Image
                style={styles.button_size}
                source={require('./Images/hitokage.jpg')}
              />
            </TouchableOpacity>

            <TouchableOpacity
              style={styles.button}
              underlayColor="#fff"
              onPress={() => Alert.alert('fushigidane')}>
              <Image
                style={styles.button_size}
                source={require('./Images/fushigidane.jpg')}
              />
            </TouchableOpacity>

            <TouchableOpacity
              style={styles.button}
              underlayColor="#fff"
              onPress={() => Alert.alert('pikachu')}>
              <Image
                style={styles.button_size}
                source={require('./Images/pikachu.jpg')}
              />
            </TouchableOpacity>

            <TouchableOpacity
              style={styles.button}
              underlayColor="#fff"
              onPress={() => Alert.alert('zenigame')}>
              <Image
                style={styles.button_size}
                source={require('./Images/zenigame.jpg')}
              />
            </TouchableOpacity>

            <TouchableOpacity
              style={styles.button}
              underlayColor="#fff"
              onPress={() => Alert.alert('myu')}>
              <Image
                style={styles.button_size}
                source={require('./Images/myu.jpg')}
              />
            </TouchableOpacity>

          </View>
        </SafeAreaView>
      </>
    );
  }
}

const styles = StyleSheet.create({
  container: {flex: 1},
  date_view: {
    height: hp('5%'),
    justifyContent: 'center',
    backgroundColor: 'yellow',
  },
  date_text: {
    fontSize: hp('3%'),
  },
  character_view: {
    height: hp('70%'),
    justifyContent: 'center',
    backgroundColor: 'green',
  },
  character_size: {
    height: 550,
    width: 250,
  },
  button_view: {
    height: hp('18%'),
    backgroundColor: 'blue',
    flexDirection: 'row',
    paddingTop: 40,
    paddingBottom: 40,
    flexWrap: 'nowrap',
  },
  // button_location_view:{
  //   height: hp('10%'),
  // },

  button: {
    //枠を作りたい
    height: hp('10%'),
    width: wp('20%'),
    justifyContent: 'center',
    backgroundColor: 'red',
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#fff',
  },

  button_char: {
    //文字を調整
    color: '#fff',
    fontSize: wp('4%'),
    textAlign: 'center',

    // paddingHorizontal: wp('0%'),
    // marginHorizontal:  wp('1%'),
  },
  button_size: {
    height: wp('20%'),
    width: wp('20%'),
  },

  tasks: {},
  myText: {
    fontSize: hp('5%'), // End result looks like the provided UI mockup
  },

  loginScreenButton: {
    marginRight: 40,
    marginLeft: 40,
    marginTop: 10,
    paddingTop: 10,
    paddingBottom: 10,
    backgroundColor: '#1E6738',
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#fff',
  },
  loginText: {
    color: '#fff',
    textAlign: 'center',
    paddingLeft: 10,
    paddingRight: 10,
  },
});
