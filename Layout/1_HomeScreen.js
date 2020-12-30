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

import Date from '../Components/Date'
import home_styles from '../Styles/home_style'
import nakanishi from '../nakanishi'

function HomeScreen({ navigation, route }) {

  //   constructor(props) {
  //     super(props);
  //     this.state = {
  //       current: new Date().toLocaleDateString(),
  //     };
  //   }

  //   componentDidMount() {
  //     setInterval(() => {
  //       this.setState({
  //         current: new Date().toLocaleString(),
  //         month: new Date().getMonth() + 1,
  //         date: new Date().getDate(),
  //       });
  //     }, 1000);
  //   }

  return (
    <>
      <SafeAreaView>
        <View style={home_styles.date_view}>
          {/* 時刻表示 */}
          <Date
            date_text={home_styles.date_text}
          />
        </View>

        <View style={home_styles.task_character_view}>
          {/* キャラ & 吹き出し 表示*/}
          <View style={home_styles.character_view}>
            <View style={home_styles.bubble_size}>

            </View>
            <Image
              style={home_styles.character_size}
              source={require('../Images/nohmi.jpg')}
            />
          </View>

          {/* タスク表示 */}
          <View style={home_styles.task_view}>

            <TouchableOpacity
              style={home_styles.task_button}
              underlayColor="#fff"
              onPress={() => Alert.alert('Task1')}>
              <Text style={home_styles.task_text}>
                ジム行く
              </Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={home_styles.task_button}
              underlayColor="#fff"
              onPress={() => Alert.alert('Task2')}>
              <Text style={home_styles.task_text}>
                読書
              </Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={home_styles.task_button}
              underlayColor="#fff"
              onPress={() => Alert.alert('Task3')}>
              <Text style={home_styles.task_text}>
                アサガオに水やり
              </Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={home_styles.task_button}
              underlayColor="#fff"
              onPress={() => Alert.alert('Task4')}>
              <Text style={home_styles.task_text}>
                公園で1時間散歩してからスタバでダークモカチップフラペチーノ飲んで帰る
              </Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={home_styles.task_button}
              underlayColor="#fff"
              onPress={() => Alert.alert('Task5')}>
              <Text style={home_styles.task_text}>
                キャド
              </Text>
            </TouchableOpacity>

          </View>
        </View>

        {/* 画面遷移ボタン */}
        <View style={home_styles.button_view}>
          <TouchableOpacity
            style={home_styles.button}
            underlayColor="#fff"
            onPress={() => {
              navigation.navigate('Home');
            }}
          >
            <Image
              style={home_styles.button_size}
              source={require('../Images/hitokage.jpg')}
            />
          </TouchableOpacity>

          <TouchableOpacity
            style={home_styles.button}
            underlayColor="#fff"
            onPress={() => {
              navigation.navigate('Task');
            }}
          >
            <Image
              style={home_styles.button_size}
              source={require('../Images/fushigidane.jpg')}
            />
          </TouchableOpacity>

          <TouchableOpacity
            style={home_styles.button}
            underlayColor="#fff"
            onPress={() => {
              navigation.navigate('Calendar');
            }}
          >
            <Image
              style={home_styles.button_size}
              source={require('../Images/pikachu.jpg')}
            />
          </TouchableOpacity>

          <TouchableOpacity
            style={home_styles.button}
            underlayColor="#fff"
            onPress={() => {
              navigation.navigate('Character');
            }}
          >
            <Image
              style={home_styles.button_size}
              source={require('../Images/zenigame.jpg')}
            />
          </TouchableOpacity>

          <TouchableOpacity
            style={home_styles.button}
            underlayColor="#fff"
            onPress={() => {
              navigation.navigate('Setting');
            }}
          >
            <Image
              style={home_styles.button_size}
              source={require('../Images/myu.jpg')}
            />
          </TouchableOpacity>

        </View>
      </SafeAreaView>
    </>
  );
}

export default HomeScreen;