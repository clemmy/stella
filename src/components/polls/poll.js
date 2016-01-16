'use strict';

import React, { StyleSheet, TouchableHighlight, Component, View, Text } from 'react-native';

let styles = StyleSheet.create({
});

class Poll extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { state, dispatch } = this.props;

    return (
      <View style={styles.container}>
        <Text>
          Poll VIEW
        </Text>
      </View>
    );
  }
}

export default Poll;
