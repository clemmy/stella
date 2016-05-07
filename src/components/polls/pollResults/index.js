'use strict';

import React, { StyleSheet, TouchableHighlight, Component, View, Text } from 'react-native';
import Immutable from 'immutable';

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
          {this.props.choice.text}
        </Text>
      </View>
    );
  }
}

PollResults.propTypes = {
  choice: React.PropTypes.shape({
      text: React.PropTypes.string.isRequired
    }).isRequired,
  poll: React.PropTypes.shape({
      title: React.PropTypes.string.isRequired,
      author: React.PropTypes.string.isRequired,
      choices: React.PropTypes.instanceOf(Immutable.List)
    }).isRequired
};

export default PollResults;
