import React, { Component } from 'react';
import {
  AppRegistry,
  Text,
  View,
  ListView
} from 'react-native';
import Realm from 'realm'


// 犬の名前をリストで出してみる
class DogList extends Component {
  constructor(props) {
    super(props)
    const ds = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 })
    this.state = {
      dataSource: ds.cloneWithRows(this.props.dogs)
    }
  }
  render() {
    return (
      <ListView
        dataSource={this.state.dataSource}
        renderRow={(rowData) => <Text>{rowData.name}</Text> }>
      </ListView>
    )
  }
}

class FirstPage extends Component {
  // テスト用にここでデータを作るよ
  componentWillMount() {
    let realm = new Realm({
      schema: [{ name: 'Dog', properties: { name: 'string' } }]
    })
    realm.write(() => {
      realm.create('Dog', { name: 'My Dog' })
    })
    //console.log(realm.path)
    this.state = ({ realm: realm })
  }
  render() {
    return (
      <View>
        <DogList dogs={this.state.realm.objects('Dog')}></DogList>
      </View>
    );
  }
}

export default class AwesomeReact extends Component {
  render() {
    return(
      <FirstPage />
    );
  }
}

AppRegistry.registerComponent('AwesomeReact', () => AwesomeReact)