'use strict';

import React, { StyleSheet, TouchableHighlight, Component, View, Text } from 'react-native';

let styles = StyleSheet.create({
});

class PollItem extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { state, dispatch } = this.props;

    return (
      <View style={styles.container}>
        <Text>
          PollItem view
        </Text>
      </View>
    );
  }
}

export default PollItem;
