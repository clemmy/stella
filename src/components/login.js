'use strict';

import React, { Component, View, Text, TouchableHighlight } from 'react-native';

class Login extends Component {
  constructor(props) {
    super(props);
  }

  onLoginPress(event) {
    console.log(this.props);
    this.props.navigator.push({
      name: 'home'
    });
  }

  render() {
    const { state, dispatch } = this.props;

    return (
      <View>
        <Text>
          Initial login view???
        </Text>
        <TouchableHighlight onPress={this.onLoginPress.bind(this)}>
          <Text>ray's butt</Text>
        </TouchableHighlight>
      </View>
    );
  }
}

export default Login;
