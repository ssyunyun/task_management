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

  async componentWillMount() {
    const data = {
      name: "kojiruri",
      sex: 0
    }

    console.log("create処理");
    // insertedData = await DAO.create("Character",data);
    // console.log(insertedData);

    console.log("read処理");
    readItems = await DAO.read("Character");
    // console.log("[Read Item]", readItems);
    // items = await DAO.delete("Character");
    // console.log(items);
    // console.log(readItems[0]);
    // console.log("readItems: ",readItems);
    readItemsMapped = readItems.map( 
      (item) => {
        return {
          id: String(item.id),
          name: item.name,
          sex: item.sex
        
      }} 
      //   let tmp = item;
      //   tmp.id = String(tmp.id);
      //   return tmp;
      // }
    );

    console.log(readItemsMapped);

    this.setState({ items: readItemsMapped});
  }



  render() {

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
          data={this.state.items}
          renderItem={({item}) =>
            <ListItem>
              <Text>{item.name}</Text>
            </ListItem>
          }
          keyExtractor={item => item.id}
        />
        </Content>
      </Container>
    );
  }
}