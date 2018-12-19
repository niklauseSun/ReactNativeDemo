import React, { Component } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

class HomeContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {  };
  }
  render() {
    console.log("props", this.props)
    return <View><TouchableOpacity
      onPress={() => {
        this.props.navigation.push("Settings");
    }}><Text>test</Text></TouchableOpacity></View>
  }

  test() {

  }
}

export default HomeContainer;