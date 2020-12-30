import React, {Component} from 'react';
import { FlatList } from "react-native";
import { Container, Header, Left, Body, Right, Title, Content, List, ListItem, Text } from 'native-base';
import Realm from 'realm'

import {
  AppRegistry,
  View,
  ListView
} from 'react-native';

// type Props = {};
export default class App extends Component {
  // constructor(props) {
  //   super(props);
  //   this.state = { realm: null };
  // }

  // componentWillMount() {
  //   Realm.open({
  //     schema: [{name: 'Person', properties: {key: 'string', name: 'string'}}]
  //   }).then(realm => {
  //     realm.write(() => {
  //       var current = new Date();
  //       realm.create('Person', {key: current.toString(), name: 'kojiruri'});
  //     });
  //     console.log(realm);
  //     this.setState({ realm });
  //     console.log(realm.path);
  //   });
  // }


  // render() {
  //   const displayItem = this.state.realm ? this.state.realm.objects('Person') : [] 

  //   return (
  //     <Container>
  //       <Header>
  //         <Left />
  //         <Body>
  //           <Title>Realmサンプル</Title>
  //         </Body>
  //         <Right />
  //       </Header>
  //       <Content>
  //       <FlatList
  //         data={displayItem}
  //         renderItem={({item}) =>
  //           <ListItem>
  //             <Text>{item.name}</Text>
  //           </ListItem>
  //         }
  //         keyExtractor={item => item.key}
  //       />
  //       </Content>
  //     </Container>
  //   );
  // }

  render() {
    return(
      <FirstPage />
    );
  }
}

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

    Realm.open({
      schema: [{name: 'Person', properties: {key: 'string', name: 'string'}}],
      schemaVersion: 1
    }).then(realm => {
      console.log(realm);

      realm.write(() => {
        var current = new Date();
        realm.create('Person', {key: current.toString(), name: 'kojiruri'});
      });
      
      // default.realmのpath
      console.log(realm.path);
      this.setState({ realm });
    });
  }
  render() {

    const displayItem = this.state.realm ? this.state.realm.objects('Person') : [] 
    
    return (
      <View>
        <DogList dogs={this.state.realm.objects('Dog')}></DogList>
      </View>
    );
  }
}