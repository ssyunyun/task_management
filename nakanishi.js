import React, {Component} from 'react';
import { FlatList } from "react-native";
import { Container, Header, Left, Body, Right, Title, Content, List, ListItem, Text } from 'native-base';
import Realm from 'realm'
import DAO from "./models/DAO"


export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = { items: null };
  }

  async componentDidMount() {
    const data = {
      name: "kojikoji",
      sex: 1
    }

    // insertedData = await DAO.create("Character",data);
    // console.log(insertedData);
    readItems = await DAO.read("Character");
    console.log("[Read Item]", readItems);
    // items = await DAO.delete("Character");
    // console.log(items);
    // console.log(readItems[0]);
    // console.log(readItems);
    this.setState({ items: readItems});
  }



  render() {
    let distpItems = this.state.items;
    console.log(distpItems[0]);
    // console.log(Object.prototype.toString(this.state.items));
    // console.log(this.state.items.__proto__);
    // const displayItem = this.state.items.map( 
    //   item => {return {
    //       id: String(item.id),
    //       name: item.name
    //   }} 
    // );

    const displayItem = [];

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
          // keyExtractor={item => item.id}
        />
        </Content>
      </Container>
    );
  }
}