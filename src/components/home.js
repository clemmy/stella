'use strict';

import React, { Component, View, Text } from 'react-native';

class Home extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { state, dispatch } = this.props;

    return (
      <View>
        <Text>
          Home Screen with options and stuff???
        </Text>
      </View>
    );
  }
}

export default Home;
