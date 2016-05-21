'use strict';

import React from 'react';
import { StyleSheet, TouchableHighlight, Component, View, Text } from 'react-native';

let styles = StyleSheet.create({
  container: {
    height: 100,
    backgroundColor: 'white',
    borderColor: '#48BBEC',
    borderWidth: 1,
    alignSelf: 'stretch',
    justifyContent: 'center',
    marginTop: 4,
    padding: 6
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold'
  },
  author: {
    fontSize: 16
  }
});

class PollListItem extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { state, dispatch } = this.props;

    return (
      <TouchableHighlight onPress={this.props.onPress} underlayColor='#99d9f4'>
        <View style={styles.container}>
          <Text style={styles.title} numberOfLines={1}>
            {this.props.poll.title}
          </Text>
          <Text style={styles.author}>
            {'Created by: ' + this.props.poll.author}
          </Text>
        </View>
      </TouchableHighlight>
    );
  }
}

export default PollListItem;
