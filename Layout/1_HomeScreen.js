import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  Image,
  TouchableOpacity,
  ImageBackground,
  StatusBar,
} from 'react-native';

import home_styles from '../Styles/home_style';

import DAO from '../models/DAO';
import {useEffect, useState, useMemo} from 'react';

import GridView from 'react-native-draggable-gridview';
import {Colors} from 'react-native/Libraries/NewAppScreen';

import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

import LottieView from 'lottie-react-native';
import {AdMobBanner} from 'react-native-admob';
import Swiper from 'react-native-swiper';

function HomeScreen({navigation, route}) {
  const [task, setTask] = useState([]);
  const [taskCheck, setTaskCheck] = useState(false);
  const [readCompleateFlag, setReadCompleateFlag] = useState(false);
  const [currentTime, setCurrentTime] = useState(new Date());
  const [selectedDay, setSelectedDay] = useState(new Date());
  const [preDayIndex, setPreDayIndex] = useState(6);

  const getTargetDowTasks = async (items) => {
    let targetDoW = new Date().getDay(); //今日の曜日がIntで返却される

    let targetItems;
    switch (targetDoW) {
      case 0:
        targetItems = items.filter((item) => item.doW.Sun === 'yellow');
        break;
      case 1:
        targetItems = items.filter((item) => item.doW.Mon === 'yellow');
        break;
      case 2:
        targetItems = items.filter((item) => item.doW.Tue === 'yellow');
        break;
      case 3:
        targetItems = items.filter((item) => item.doW.Wed === 'yellow');
        break;
      case 4:
        targetItems = items.filter((item) => item.doW.Thu === 'yellow');
        break;
      case 5:
        targetItems = items.filter((item) => item.doW.Fri === 'yellow');
        break;
      case 6:
        targetItems = items.filter((item) => item.doW.Sat === 'yellow');
        break;
    }
    return targetItems;
  };

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
              height={hp('15%')}
              renderItem={(item, index) => (
                <View style={styles.grid_View}>
                  {taskCheck ? (
                    <LottieView
                      source={require('../Animation/46345-green.json')}
                      autoPlay
                      loop={false}
                    />
                  ) : (
                    <View />
                  )}
                  <Text style={{textAlign: 'center'}}>{item.taskName}</Text>
                </View>
              )}
              onPressCell={async (item) => {
                // await setModal('update', item)
                // setModalVisible(true)
                setTaskCheck(true);
                // Alert.alert(item.taskName);
              }}
              onReleaseCell={(item) => {
                setTask(item);
                console.log('###########');
              }}
              keyExtractor={(item) => item.id}
            />
          </View>
        </>
      );
    } else if (!task.length) {
      return (
        <>
          <View style={styles.taskView} />
        </>
      );
    }
  };

  const viewDays = () => {
    return (
      <>
        <View>
          <Swiper
            showsButtons={true}
            loop={false}
            showsPagination={false}
            index={6}
            buttonWrapperStyle={{
              backgroundColor: 'transparent',
              flexDirection: 'row',
              position: 'absolute',
              top: -hp('0.6%'),
              left: 0,
              flex: 1,
              paddingHorizontal: 10,
              paddingVertical: 10,
              justifyContent: 'space-between',
              alignItems: 'center',
            }}
            onIndexChanged={(index) => {
              console.log(index);
              console.log(preDayIndex);
              setTaskCheck(true);
              if (index > preDayIndex) {
                // tmpDay.setDate(tmpDay.getDate() + 1);
                // setSelectedDay(tmpDay);
                // setPreDayIndex(index);
              } else if (index < preDayIndex) {
                // tmpDay.setDate(tmpDay.getDate() - 1);
                // setSelectedDay(tmpDay);
                // setPreDayIndex(index);
              }
            }}>
            <View style={styles.date_swipe_view}>
              <Text style={styles.date_swipe_text_view}>
                {selectedDay.getDate()}
              </Text>
            </View>
            <View style={styles.date_swipe_view}>
              <Text style={styles.date_swipe_text_view}>
                {selectedDay.getDate()}
              </Text>
            </View>
            <View style={styles.date_swipe_view}>
              <Text style={styles.date_swipe_text_view}>
                {selectedDay.getDate()}
              </Text>
            </View>
            <View style={styles.date_swipe_view}>
              <Text style={styles.date_swipe_text_view}>
                {selectedDay.getDate()}
              </Text>
            </View>
            <View style={styles.date_swipe_view}>
              <Text style={styles.date_swipe_text_view}>
                {selectedDay.getDate()}
              </Text>
            </View>
            <View style={styles.date_swipe_view}>
              <Text style={styles.date_swipe_text_view}>
                {selectedDay.getDate()}
              </Text>
            </View>
            <View style={styles.date_swipe_view}>
              <Text style={styles.date_swipe_text_view}>
                {selectedDay.getDate()}
              </Text>
            </View>
          </Swiper>
        </View>
      </>
    );
  };

  const tmp = async (items) => {
    let targetItems = await getTargetDowTasks(items);
    setTask(targetItems);
    setReadCompleateFlag(true);
  };

  const viewTasksMemo = useMemo(() => viewTasks(), [task, taskCheck]);
  const viewDaysMemo = useMemo(() => viewDays(), [selectedDay]);

  useEffect(() => {
    console.log('useEffect');
    connectTable('read').then((items) => {
      tmp(items);
    });
  }, [currentTime]);

  if (!readCompleateFlag) {
    return (
      <>
        <Text>Loading...</Text>
      </>
    );
  } else if (readCompleateFlag) {
    return (
      <>
        <SafeAreaView style={styles.topSafeArea} />
        <StatusBar
          backgroundColor="blue"
          barStyle="light-content"
          hidden={false}
        />
        <View style={styles.bottomSafeArea}>
          <ImageBackground
            source={require('../Images/back_1.jpg')}
            style={styles.image}>
            <View style={home_styles.date_view}>{viewDaysMemo}</View>

            <View style={home_styles.task_character_view}>
              {/* キャラ & 吹き出し 表示*/}
              <View style={home_styles.character_view}>
                <View style={home_styles.bubble_size}>
                  {/* 吹き出し */}
                  <Text>Jun♡</Text>
                </View>
                <Image
                  style={home_styles.character_size}
                  source={require('../Images/person.png')}
                />
              </View>

              {/* タスク表示 */}
              <View style={home_styles.task_view}>{viewTasksMemo}</View>
            </View>

            {/* 画面遷移ボタン */}
            <View style={home_styles.button_ad_view}>
              <View style={home_styles.button_view}>
                <TouchableOpacity
                  style={home_styles.button}
                  underlayColor="#fff"
                  onPress={() => {
                    setCurrentTime(new Date());
                    navigation.navigate('Home');
                  }}>
                  <Image
                    style={home_styles.button_size}
                    source={require('../Images/Home.png')}
                  />
                </TouchableOpacity>

                <TouchableOpacity
                  style={home_styles.button}
                  underlayColor="#fff"
                  onPress={() => {
                    navigation.navigate('Task');
                  }}>
                  <Image
                    style={home_styles.button_size}
                    source={require('../Images/Task.png')}
                  />
                </TouchableOpacity>

                <TouchableOpacity
                  style={home_styles.button}
                  underlayColor="#fff"
                  onPress={() => {
                    navigation.navigate('Calendar');
                  }}>
                  <Image
                    style={home_styles.button_size}
                    source={require('../Images/Calendar.png')}
                  />
                </TouchableOpacity>

                <TouchableOpacity
                  style={home_styles.button}
                  underlayColor="#fff"
                  onPress={() => {
                    navigation.navigate('Character');
                  }}>
                  <Image
                    style={home_styles.button_size}
                    source={require('../Images/Character.png')}
                  />
                </TouchableOpacity>

                <TouchableOpacity
                  style={home_styles.button}
                  underlayColor="#fff"
                  onPress={() => {
                    navigation.navigate('Setting');
                  }}>
                  <Image
                    style={home_styles.button_size}
                    source={require('../Images/Setting.png')}
                  />
                </TouchableOpacity>
              </View>
              <View style={home_styles.ad}>
                <AdMobBanner
                  adSize="smartBannerLandscape"
                  adUnitID="ca-app-pub-8336553396881092/6199280917" // ProductionAd
                  // adUnitID="ca-app-pub-3940256099942544/6300978111" //TestAd
                  testDevices={[AdMobBanner.simulatorId]}
                  onAdFailedToLoad={(error) => console.error(error)}
                />
              </View>
            </View>
          </ImageBackground>
        </View>
      </>
    );
  }
}

const connectTable = async (operation, id, sortableNum_) => {
  if (operation === 'read') {
    readItems = await DAO.read('Task');
    // readItemsSorted = readItems.sorted('sortableNum')
    readItemsMapped = readItems.map((item) => {
      return {
        id: String(item.id),
        taskName: item.taskName,
        taskMemo: item.taskMemo,
        doW: item.doW,
        sortableNum: item.sortableNum,
      };
    });

    return readItemsMapped;
  } else if (operation === 'create') {
    // create
  } else if (operation === 'update') {
    // update
    await DAO.update('Task', Number(id), 'sortableNum', sortableNum_);
  } else if (operation === 'delete') {
    await DAO.delete('Task');
  }
};

const styles = StyleSheet.create({
  topSafeArea: {
    flex: 0,
    backgroundColor: 'blue',
  },
  bottomSafeArea: {
    flex: 1,
    backgroundColor: 'green',
  },
  image: {
    height: '100%',
    resizeMode: 'cover',
  },
  taskView: {
    height: '100%',
  },
  grid_View: {
    flex: 1,
    margin: 1,
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'lightblue',
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
  date_swipe_view: {
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  date_swipe_text_view: {
    color: '#fff',
    fontSize: hp('4%'),
    fontWeight: 'bold',
    justifyContent: 'center',
  },
});

export default HomeScreen;
