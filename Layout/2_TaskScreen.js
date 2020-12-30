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
  // Modal,
} from 'react-native';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

import task_styles from '../Styles/task_style'
import Task_modal from '../Components/Task_modal'

import Modal from "react-native-modal";
import { heightPercentageToDP } from 'react-native-responsive-screen';


function TaskScreen({ navigation, route }) {

  const [modalVisible, setmodalVisible] = React.useState(false);

  const changemodal = () => {
    setmodalVisible(false);
  }

  return (
    <>
      <ScrollView
        contentInsetAdjustmentBehavior="automatic"
        style={styles.scrollView}>
        <Text>TaskScreen</Text>

        <View >
          <View style={task_styles.task_position_view}>
            <View style={{ padding: wp('4%') }}>
              <TouchableOpacity
                underlayColor="#fff"
                onPress={() => setmodalVisible(true)}>
                <Task_modal modalstate={modalVisible} cahngemodal={changemodal}/>
                <Text style={task_styles.task_view}>
                  ジム行く
              </Text>
              </TouchableOpacity>
            </View>

            <View style={{ padding: wp('4%') }}>
              <TouchableOpacity
                underlayColor="#fff"
                onPress={() => setmodalVisible(true)}>
                <Task_modal modalstate={modalVisible} cahngemodal={changemodal}/>
                <Text style={task_styles.task_view}>
                  読書
              </Text>
              </TouchableOpacity>
            </View>

            <View style={{ padding: wp('4%') }}>
              <TouchableOpacity
                underlayColor="#fff"
                onPress={() => setmodalVisible(true)}>
                <Task_modal modalstate={modalVisible} cahngemodal={changemodal}/>
                <Text style={task_styles.task_view}>
                  アサガオに水やり
              </Text>
              </TouchableOpacity>
            </View>

            <View style={{ padding: wp('4%') }}>
              <TouchableOpacity
                underlayColor="#fff"
                onPress={() => setmodalVisible(true)}>
                <Task_modal modalstate={modalVisible} cahngemodal={changemodal}/>
                <Text style={task_styles.task_view}>
                  公園で1時間散歩してからスタバでダークモカチップフラペチーノ飲んで帰る
              </Text>
              </TouchableOpacity>
            </View>

            <View style={{ padding: wp('4%') }}>
              <TouchableOpacity
                underlayColor="#fff"
                onPress={() => setmodalVisible(true)}>
                <Task_modal modalstate={modalVisible} cahngemodal={changemodal}/>
                <Text style={task_styles.task_view}>
                  キャド
              </Text>
              </TouchableOpacity>
            </View>

            <View style={{ padding: wp('4%') }}>
              <TouchableOpacity
                underlayColor="#fff"
                onPress={() => setmodalVisible(true)}>
                <Task_modal modalstate={modalVisible} cahngemodal={changemodal}/>
                <Text style={task_styles.task_view}>
                  キャド
              </Text>
              </TouchableOpacity>
            </View>

            <View style={{ padding: wp('4%') }}>
              <TouchableOpacity
                underlayColor="#fff"
                onPress={() => setmodalVisible(true)}>
                <Task_modal modalstate={modalVisible} cahngemodal={changemodal}/>
                <Text style={task_styles.task_view}>
                  キャド
              </Text>
              </TouchableOpacity>
            </View>

            <View style={{ padding: wp('4%') }}>
              <TouchableOpacity
                underlayColor="#fff"
                onPress={() => setmodalVisible(true)}>
                <Task_modal modalstate={modalVisible} cahngemodal={changemodal}/>
                <Text style={task_styles.task_view}>
                  キャド
              </Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
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

export default TaskScreen;