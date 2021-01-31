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
import LottieView from 'lottie-react-native';

function Demo_2() {
  const [tmp, setTemp] = React.useState(false);

  const demo = () => {
    return (
      <LottieView
        // style={{
        //   width: 100,
        //   height: 100,
        // }}
        source={require('./Animation/46345-green.json')}
        autoPlay
        loop={false}
      />
    );
  };
  return (
    <>
      <Text>aaaaaa</Text>
      <TouchableOpacity
        style={{
          borderWidth: 1,
          width: '100%',
          height: '10%',
          borderRadius: 5,
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: 'cyan',
        }}
        underlayColor="#fff"
        onPress={() => {
          setTemp(true)
          console.log('Aaaaaaaaaaaaa');
        }}>
        {tmp ? (
          <LottieView
            source={require('./Animation/46345-green.json')}
            autoPlay
            loop={false}
          />
        ) : (
          <View />
        )}

        <Text>Button</Text>
      </TouchableOpacity>
    </>
  );
}

export default Demo_2;
