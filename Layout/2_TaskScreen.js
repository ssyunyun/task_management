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
  RefreshControlBase,
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
// import Task_modal from '../Components/Task_modal_tmp'

import GridView from 'react-native-draggable-gridview'

import DAO from "../models/DAO"
import { useEffect, useState, useMemo, useCallback } from "react";


function TaskScreen({ navigation, route }) {

  /* Initialize State */
  const [task, setTask] = useState([])
  const [tableChangeDetection, setTableChangeDetection] = useState(true)
  const [modalVisible, setModalVisible] = useState(false);
  const [modalType, setModalType] = useState('firstRendering');
  const [modalDiscription, setModalDiscription] = useState([]);
  const [modalDiscriptionDoW, setModalDiscriptionDoW] = useState({});
  /********************/

  /* Functions */
  const setModalVisible_false = (kojikoji) => {
    if (kojikoji) {
      setModalVisible(false);
    }
  }

  const setModal = async (modalType_tmp = 'firstRendering', item = null) => {

    if (modalType_tmp === 'update') {
      setModalType(modalType_tmp)
      setModalDiscription(item)
      setModalDiscriptionDoW({
        Mon: item.doW.Mon,
        Tue: item.doW.Tue,
        Wed: item.doW.Wed,
        Thu: item.doW.Thu,
        Fri: item.doW.Fri,
        Sat: item.doW.Sat,
        Sun: item.doW.Sun
      })
    } else if (modalType_tmp === 'create' || modalType_tmp === 'firstRendering') {
      setModalType(modalType_tmp)
      setModalDiscription({
        taskName: '',
        taskMemo: '',
      })
      setModalDiscriptionDoW({
        Mon: 'cyan',
        Tue: 'cyan',
        Wed: 'cyan',
        Thu: 'cyan',
        Fri: 'cyan',
        Sat: 'cyan',
        Sun: 'cyan',
      })
    }
  }

  const changeTable = async () => {

    if (tableChangeDetection === true) {
      setTableChangeDetection(false)
    } else if (tableChangeDetection === false) {
      setTableChangeDetection(true)
    }
  }

  const tmp = async (item) => {

    const id = item.map((items) => items.id)

    setTask(item)

    for (let sortableNum_ = 0; sortableNum_ < item.length; sortableNum_++) {
      await connectTable('update', id[sortableNum_], sortableNum_)
    }
  }

  /************/

  /* useMemo Functions */
  const viewTasks = () => {

    console.log("drag!!!!!!!!");

    if (task.length) {

      return (
        <>
          <View style={styles.taskView}>
            <GridView
              data={task}
              numColumns={3}
              delayLongPress={150}
              width={wp('100%')}
              heightSelfMade={wp('25')}
              renderItem={(item, index) => (
                <View style={styles.grid_View}>
                  <Text style={{ textAlign: 'center' }}>{item.taskName}</Text>
                </View>
              )}
              onPressCell={async (item) => {
                await setModal('update', item)
                setModalVisible(true)
              }
              }
              onReleaseCell={item => tmp(item)}
              keyExtractor={item => item.id}
            />
          </View>
        </>
      )
    } else if(!task.length){

      return (
        <>
        <View style={styles.taskView}/>
        </>
      )
    }
  };

  const viewModals = () => {

    console.log("viewModals!!!!!!!!");

    let tmp

    if (!task.length) {
      tmp = 0
    } else if (task.length) {
      tmp = task.length
    }

    return (
      <>
        <Task_modal
          modalVisible_={modalVisible}
          modalType_={modalType}
          taskLength_={tmp}
          setModalVisible_false_={setModalVisible_false}
          modalDiscription_={modalDiscription}
          modalDiscriptionDoW_={modalDiscriptionDoW}
          changeTable_ = {changeTable}
        />
      </>
    )
  };


  /************************/

  useMemo(() => setModal(), []);
  const viewTasksMemo = useMemo(() => viewTasks(), [task]);
  const viewModalsMemo = useMemo(() => viewModals(), [modalVisible]);


  useEffect(() => {
    console.log('useEffect')
    connectTable('read').then(item => {
      setTask(item)
    })
  }, [tableChangeDetection])

  if (task === []) {
    return (
      <>
        <Text>Loading...</Text>
      </>
    )
  }
  else if (task !== []) {

    return (
      <>
        <SafeAreaView>

          <Text>TaskScreen</Text>

          {viewTasksMemo}
          {/* {viewModalsMemo} */}

          {modalVisible ?
            <View>
              {viewModalsMemo}
            </View>
            : <View />
          }

          <TouchableOpacity
            underlayColor="#fff"
            onPress={async () => {
              await setModal('create')
              setModalVisible(true)
            }}
            style={{
              borderWidth: 1,
              width: '100%',
              height: '10%',
              borderRadius: 5,
              justifyContent: 'center',
              alignItems: 'center',
              backgroundColor: 'lawngreen',
            }}
          >
            <Text>creat</Text>
          </TouchableOpacity>

        </SafeAreaView>
      </>
    )
  }
}

const connectTable = async (operation, id, sortableNum_) => {

  if (operation === 'read') {

    readItems = await DAO.read("Task");
    readItemsSorted = readItems.sorted('sortableNum')

    readItemsMapped = readItemsSorted.map(
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

export default TaskScreen