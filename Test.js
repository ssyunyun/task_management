import React, {Component} from 'react';
import { FlatList } from "react-native";
import { Container, Header, Left, Body, Right, Title, Content, List, ListItem, Text } from 'native-base';
import Realm from 'realm'

Props = {};
export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = { realm: null };
  }

  componentWillMount() {
    Realm.open({
      schema: [{name: 'Person', properties: {key: 'string', name: 'string'}}]
    }).then(realm => {
      realm.write(() => {
        var current = new Date();
        realm.create('Person', {key: current.toString(), name: 'kojiruri'});
      });
      console.log(realm);
      // default.realmのpath
      console.log(realm.path);
      this.setState({ realm });
    });
  }


  render() {
    const displayItem = this.state.realm ? this.state.realm.objects('Person') : [] 
    

    return (
      <Container>
        <Header>
          <Left />
          <Body>
            <Title>Realmサンプル</Title>
          </Body>
          <Right />
        </Header>
        <Content>
        <FlatList
          data={displayItem}
          renderItem={({item}) =>
            <ListItem>
              <Text>{item.name}</Text>
            </ListItem>
          }
          keyExtractor={item => item.key}
        />
        </Content>
      </Container>
    );
  }
}