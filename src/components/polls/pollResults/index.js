'use strict';

import React, { StyleSheet, TouchableHighlight, Component, View, Text } from 'react-native';

let styles = StyleSheet.create({
});

class PollResults extends Component {
  constructor(props) {
    super(props);

    console.log(props);
    console.log(this.props);
  }

  render() {
    const { state, dispatch } = this.props;

    return (
      <View style={styles.container}>
        <Text>
          Poll results VIEW
          {this.props.poll.title}
          {this.props.poll.author}
        </Text>
      </View>
    );
  }
}

export default PollResults;
