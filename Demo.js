import React, { Component } from 'react'
import { View, TouchableOpacity, Text, Alert, } from 'react-native'
import DraggableFlatList from 'react-native-draggable-dynamic-flatlist'
import { Board } from 'react-native-draganddrop-board'
import GridView from 'react-native-draggable-gridview'

function Demo() {

  const [data, setData] = React.useState(['1', '2', '3', '4', '5',])

  return (

    <GridView
      data={data}
      numColumns={3}
      delayLongPress={50}
      renderItem={(item) => (
        <View style={{ flex: 1, margin: 1, justifyContent: 'center', backgroundColor: 'gray' }}>
          <Text style={{ textAlign: 'center' }}>{item}</Text>
          <TouchableOpacity
            underlayColor="#fff"
            onPress={() => Alert.alert('Task2')}>
            <Text>
              読書
              </Text>
          </TouchableOpacity>
        </View>
      )}
      onReleaseCell={(items) => setData(items)}
    />

  )
}

export default Demo;

