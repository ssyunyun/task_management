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
} from 'react-native';

import home_styles from '../Styles/home_style'
import nakanishi from '../nakanishi'

import DAO from "../models/DAO"
import { useEffect, useState, useMemo } from "react";

import GridView from 'react-native-draggable-gridview'
import {
  Colors,
} from 'react-native/Libraries/NewAppScreen';

import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

function HomeScreen({ navigation, route }) {

  console.log('Realm_schemaVersion : ')
  console.log(Realm.schemaVersion(Realm.defaultPath))

  const [task, setTask] = useState([])

  const getTargetDowTasks = async (items) => {

    let targetDoW = new Date().getDay();//今日の曜日がIntで返却される

    const id = items.map((item) => item.id)

    let targetItems
    switch (targetDoW) {
      case (0):
        targetItems = items.filter((item) => item.doW.Sun === "yellow")
        break
      case (1):
        targetItems = items.filter((item) => item.doW.Mon === "yellow")
        break
      case (2):
        targetItems = items.filter((item) => item.doW.Tue === "yellow")
        break
      case (3):
        targetItems = items.filter((item) => item.doW.Wed === "yellow")
        break
      case (4):
        targetItems = items.filter((item) => item.doW.Thu === "yellow")
        break
      case (5):
        targetItems = items.filter((item) => item.doW.Fri === "yellow")
        break
      case (6):
        targetItems = items.filter((item) => item.doW.Sat === "yellow")
        console.log('[土曜日]: ', targetItems)
        break
    }
    return targetItems

  }

  const viewTasks = () => {

    if (task.length) {

      return (
        <>
          <View style={styles.taskView}>
            <GridView
              data={task}
              numColumns={1}
              delayLongPress={150}
              width={wp('50%')}
              heightSelfMade={wp('20%')}
              renderItem={(item, index) => (
                <View style={styles.grid_View}>
                  <Text style={{ textAlign: 'center' }}>{item.taskName}</Text>
                </View>
              )}
              onPressCell={async (item) => {
                // await setModal('update', item)
                // setModalVisible(true)
                Alert.alert(item.taskName)
              }
              }
              // onReleaseCell={item => tmp(item)}
              keyExtractor={item => item.id}
            />
          </View>
        </>
      )
    } else if (!task.length) {

      return (
        <>
          <View style={styles.taskView} />
        </>
      )
    }
  };


  const tmp = async (items) => {
    let a = await getTargetDowTasks(items)
    setTask(a)
  }

  const viewTasksMemo = useMemo(() => viewTasks(), [task]);

  useEffect(() => {
    console.log('useEffect')
    connectTable('read').then(items => {
      tmp(items)
    })
  }, [])

  if (task === []) {
    return (
      <>
        <Text>Loading...</Text>
      </>
    )
  } else if (task !== []) {
    console.log('#######################')
    console.log(task)

    return (
      <>
        <SafeAreaView>



          <View style={home_styles.date_view}>
            {/* 時刻表示 */}
            <Text>aaa</Text>
          </View>

          <View style={home_styles.task_character_view}>
            {/* キャラ & 吹き出し 表示*/}
            <View style={home_styles.character_view}>
              <View style={home_styles.bubble_size}>
                {/* 吹き出し */}
              </View>
              <Image
                style={home_styles.character_size}
                source={require('../Images/nohmi.jpg')}
              />
            </View>

            {/* タスク表示 */}
            <View style={home_styles.task_view}>
              {viewTasksMemo}
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
}

const connectTable = async (operation, id, sortableNum_) => {

  if (operation === 'read') {

    readItems = await DAO.read('Task');
    // readItemsSorted = readItems.sorted('sortableNum')
    readItemsMapped = readItems.map(
      (item) => {
        return {
          id: String(item.id),
          taskName: item.taskName,
          taskMemo: item.taskMemo,
          doW: item.doW,
          sortableNum: item.sortableNum
        }
      }
    );

    return readItemsMapped
  }
  else if (operation === 'create') {
    // create
  } else if (operation === 'update') {
    // update
    await DAO.update("Task", Number(id), "sortableNum", sortableNum_);
  } else if (operation === 'delete') {
    await DAO.delete("Task");
  }

}

const styles = StyleSheet.create({
  taskView: {
    height: hp('70%'),
  },
  grid_View: {
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


export default HomeScreen;


