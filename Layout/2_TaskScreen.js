import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  Image,
  TouchableOpacity,
  Alert,
  ScrollView,
} from 'react-native';

import {
  Colors,
} from 'react-native/Libraries/NewAppScreen';

import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

import task_styles from '../Styles/task_style'
import Task_modal from '../Components/Task_modal'
import Task_modal_tmp from '../Components/Task_modal_tmp'

import GridView from 'react-native-draggable-gridview'


function TaskScreen({ navigation, route }) {

  const [modalVisible, setmodalVisible] = React.useState(false);
  const [modalName, setmodalName] = React.useState('');

  const setModalVisible_false = () => {
    setmodalVisible(false);
  }

  const setModal = (modalName) => {
    setmodalVisible(true);
    setmodalName(modalName);
  }

  const [data, setData] = React.useState([
    'こじこじ1号',
    'こじこじ2号',
    'こじこじ3号',
    'こじこじ4号',
    'こじこじ5号',
    'こじこじ6号',
    'こじこじ7号',
    'こじこじ8号',
    'こじこじ9号',
    'こじこじ10号',
    'こじこじ11号',
    'こじこじ12号',
    'こじこじ13号',
    'こじこじ14号',
    'こじこじ15号',
    'こじこじ16号',
  ])

  return (
    <>
      <SafeAreaView>

        <Text>TaskScreen</Text>

        <Task_modal
          modalVisible_={modalVisible}
          setModalVisible_false_={setModalVisible_false}
          modalName_={modalName}
        />
        <View style={styles.taskView}>
            <GridView
              data={data}
              numColumns={3}
              delayLongPress={100}
              renderItem={(item) => (
                <View style={styles.grid_View}>
                  <Text style={{ textAlign: 'center' }}>{item}</Text>
                </View>
              )}
              onPressCell={(item) => setModal(item)}
              onReleaseCell={(items) => setData(items)}
            />
        </View>

        {/* <View style={styles.taskView}>
          <ScrollView
            contentInsetAdjustmentBehavior="automatic"
            style={styles.scrollView}>

            <View style={task_styles.task_position_view}>
              <View style={{ padding: wp('4%') }}>
                <TouchableOpacity
                  underlayColor="#fff"
                  onPress={() => setModal('ジム行く')}>
                  <Text style={task_styles.task_view}>
                    ジム行く
              </Text>
                </TouchableOpacity>
              </View>

              <View style={{ padding: wp('4%') }}>
                <TouchableOpacity
                  underlayColor="#fff"
                  onPress={() => setModal('読書')}>
                  <Text style={task_styles.task_view}>
                    読書
              </Text>
                </TouchableOpacity>
              </View>

              <View style={{ padding: wp('4%') }}>
                <TouchableOpacity
                  underlayColor="#fff"
                  onPress={() => setModal('読書')}>
                  <Text style={task_styles.task_view}>
                    アサガオに水やり
              </Text>
                </TouchableOpacity>
              </View>

              <View style={{ padding: wp('4%') }}>
                <TouchableOpacity
                  underlayColor="#fff"
                  onPress={() => setModal('読書')}>
                  <Text style={task_styles.task_view}>
                    公園で1時間散歩してからスタバでダークモカチップフラペチーノ飲んで帰る
              </Text>
                </TouchableOpacity>
              </View>

              <View style={{ padding: wp('4%') }}>
                <TouchableOpacity
                  underlayColor="#fff"
                  onPress={() => setModal('読書')}>
                  <Text style={task_styles.task_view}>
                    キャド
              </Text>
                </TouchableOpacity>
              </View>

              <View style={{ padding: wp('4%') }}>
                <TouchableOpacity
                  underlayColor="#fff"
                  onPress={() => setModal('読書')}>
                  <Text style={task_styles.task_view}>
                    キャド
              </Text>
                </TouchableOpacity>
              </View>

              <View style={{ padding: wp('4%') }}>
                <TouchableOpacity
                  underlayColor="#fff"
                  onPress={() => setModal('読書')}>
                  <Text style={task_styles.task_view}>
                    キャド
              </Text>
                </TouchableOpacity>
              </View>

              <View style={{ padding: wp('4%') }}>
                <TouchableOpacity
                  underlayColor="#fff"
                  onPress={() => setModal('読書')}>
                  <Text style={task_styles.task_view}>
                    キャド
              </Text>
                </TouchableOpacity>
              </View>

              <View style={{ padding: wp('4%') }}>
                <TouchableOpacity
                  underlayColor="#fff"
                  onPress={() => setModal('読書')}>
                  <Text style={task_styles.task_view}>
                    キャド
              </Text>
                </TouchableOpacity>
              </View>

              <View style={{ padding: wp('4%') }}>
                <TouchableOpacity
                  underlayColor="#fff"
                  onPress={() => setModal('読書')}>
                  <Text style={task_styles.task_view}>
                    キャド
              </Text>
                </TouchableOpacity>
              </View>

              <View style={{ padding: wp('4%') }}>
                <TouchableOpacity
                  underlayColor="#fff"
                  onPress={() => setModal('読書')}>
                  <Text style={task_styles.task_view}>
                    キャド
              </Text>
                </TouchableOpacity>
              </View>


              <View style={{ padding: wp('4%') }}>
                <TouchableOpacity
                  underlayColor="#fff"
                  onPress={() => setModal('読書')}>
                  <Text style={task_styles.task_view}>
                    キャド
              </Text>
                </TouchableOpacity>
              </View>

              <View style={{ padding: wp('4%') }}>
                <TouchableOpacity
                  underlayColor="#fff"
                  onPress={() => setModal('読書')}>
                  <Text style={task_styles.task_view}>
                    キャド
              </Text>
                </TouchableOpacity>
              </View>

              <View style={{ padding: wp('4%') }}>
                <TouchableOpacity
                  underlayColor="#fff"
                  onPress={() => setModal('読書')}>
                  <Text style={task_styles.task_view}>
                    キャド
              </Text>
                </TouchableOpacity>
              </View>
            </View>
          </ScrollView>
        </View> */}
      </SafeAreaView>
    </>
  );
}

const styles = StyleSheet.create({
  taskView: {
    height: hp('70%'),
  },
  grid_View:{
    flex: 1,
    margin: 1,
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'lightblue'
  },
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

export default TaskScreen