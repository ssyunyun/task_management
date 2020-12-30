import React, {Component} from 'react';
import {
    View,
    Text,
    StyleSheet
} from 'react-native'

export default class Date extends Component {

  //   constructor(props) {
  //     super(props);
  //     this.state = {
  //       current: new Date().toLocaleDateString(),
  //     };
  //   }

  //   componentDidMount() {
  //     setInterval(() => {
  //       this.setState({
  //         current: new Date().toLocaleString(),
  //         month: new Date().getMonth() + 1,
  //         date: new Date().getDate(),
  //       });
  //     }, 1000);
  //   }


    render() {
        return (
            <Text style={this.props.date_text}>
                {/* {this.state.month}/{this.state.date} */}
            </Text>
        )
    }
}