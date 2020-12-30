import { StyleSheet } from 'react-native';
import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp,
  } from 'react-native-responsive-screen';

export default StyleSheet.create({

  task_view: {
    flex: 1,
    borderWidth: 1,
    height: hp('10%'),
    width: wp('42%'),
    justifyContent: 'center',
    flexDirection: 'row',
    alignItems: "center",
    backgroundColor: "#DDDDDD",
    padding: 5,

    
  },

  task_position_view: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    
    
  },



});