'use strict';

import React from 'react';
import { StyleSheet, TouchableHighlight, Component, View, Text } from 'react-native';

let styles = StyleSheet.create({
});

class Polls extends Component {
  constructor(props) {
    super(props);
  }

  goToPoll(event) {
    this.props.navigator.push({
      name: 'pollDetail'
    });
  }

  render() {
    const { state, dispatch } = this.props;

    return (
      <View style={styles.container}>
        <Text>
          POLLS VIEW ZOMGGG
        </Text>
      </View>
    );
  }
}

export default Polls;
