import { StyleSheet } from 'react-native';
import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp,
  } from 'react-native-responsive-screen';

export default StyleSheet.create({
  date_view: {
    height: hp('5%'),
    justifyContent: 'center',
    // backgroundColor: 'yellow',
  },
  date_text: {
    fontSize: hp('3%'),
  },
  task_character_view: {
    height: hp('70%'),
    justifyContent: 'center',
    // backgroundColor: 'red',
    flexDirection: 'row',
  },
  bubble_size: {
    height: '20%',
    width: '90%',
    borderWidth: 1,
  },
  character_view: {
    height: '100%',
    width: '50%',
    alignItems: 'center',
    // backgroundColor: 'green',
  },
  character_size: {
    height: '80%',
    width: '100%',
  },
  task_view: {
    height: '100%',
    width: '50%',
    // backgroundColor: 'purple',
    justifyContent: 'space-around',
    alignItems: 'center'
  },
  task_button: {
    height: '15%',
    width: '80%',
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
  },
  button_view: {
    height: hp('18%'),
    // backgroundColor: 'blue',
    flexDirection: 'row',
    paddingTop: 40,
    paddingBottom: 40,
    flexWrap: 'nowrap',
  },
  button: {
    //枠を作りたい
    height: hp('10%'),
    width: wp('20%'),
    justifyContent: 'center',
    // backgroundColor: 'red',
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#fff',
  },
  button_char: {
    //文字を調整
    color: '#fff',
    fontSize: wp('4%'),
    textAlign: 'center',
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
    // backgroundColor: '#1E6738',
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