'use strict';

import React, { StyleSheet, TouchableHighlight, Component, View, Text } from 'react-native';

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

  onPress() {
    console.log('pressed');
    console.log(this.props.poll);
  }

  render() {
    const { state, dispatch } = this.props;

    return (
      <TouchableHighlight onPress={this.onPress.bind(this)} underlayColor='#99d9f4'>
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
