import React from 'react';
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  Alert,
  RefreshControlBase,
} from 'react-native';
import Swiper from 'react-native-swiper';
import {Colors} from 'react-native/Libraries/NewAppScreen';

import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

import Carousel, {Pagination} from 'react-native-snap-carousel';

function Demo_2() {
  const [tmp, setTemp] = React.useState(100);
  const data = [
    {
      id: 1,
      text: 'aaa',
    },
    {
      id: 2,
      text: 'bbb',
    },
    {
      id: 3,
      text: 'ccc',
    },
  ];

  const demo = (items, index) => {
    console.log(items.item.text);
    return (
      <>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}>
          <TouchableOpacity underlayColor="#fff" onPress={() => {}}>
            <Text>←</Text>
          </TouchableOpacity>
          <Text style={{color: 'red', fontSize: hp('4%'), textAlign: 'center'}}>
            {items.item.text}
          </Text>
          <TouchableOpacity underlayColor="#fff" onPress={() => {}}>
            <Text>→</Text>
          </TouchableOpacity>
        </View>
      </>
    );
  };

  return (
    <>
      <View
        style={{
          height: hp('5%'),
        }}>
        <Carousel
          data={data}
          renderItem={(items, index) => demo(items, index)}
          onSnapToItem={(slideIndex) => {
            console.log(tmp);
            setTemp(slideIndex);
          }}
          itemWidth={wp('100%')}
          sliderWidth={wp('100%')}
        />
      </View>
    </>
  );
}

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
    color: 'red',
    fontSize: hp('4%'),
    fontWeight: 'bold',
    justifyContent: 'center',
  },
});

export default Demo_2;
