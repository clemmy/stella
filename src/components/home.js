'use strict';

import React, { StyleSheet, TouchableHighlight, Component, View, Text } from 'react-native';

let styles = StyleSheet.create({
  container: {
    flex: 4
  },
  buttonText: {
    fontSize: 24,
    fontWeight: 'bold'
  },
  baseButton: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
});

class Home extends Component {
  constructor(props) {
    super(props);
  }

  goToPolls(event) {
    this.props.navigator.push({
      name: 'polls'
    });
  }

  goToLists(event) {
    console.log(event)
  }

  goToEvents(event) {
    console.log(event)
  }

  goToChat(event) {
    console.log(event)
  }

  render() {
    const { state, dispatch } = this.props;

    return (
      <View style={styles.container}>

        <TouchableHighlight
          style={[styles.baseButton]}
          onPress={this.goToPolls.bind(this)}
          underlayColor='#99d9f4'
        >
          <Text style={styles.buttonText}>Polls</Text>
        </TouchableHighlight>

        <TouchableHighlight
          style={[styles.baseButton]}
          onPress={this.goToLists.bind(this)}
          underlayColor='#99d9f4'
        >
          <Text style={styles.buttonText}>Lists</Text>
        </TouchableHighlight>

        <TouchableHighlight
          style={[styles.baseButton]}
          onPress={this.goToEvents.bind(this)}
          underlayColor='#99d9f4'
        >
          <Text style={styles.buttonText}>Events</Text>
        </TouchableHighlight>

        <TouchableHighlight
          style={[styles.baseButton]}
          onPress={this.goToChat.bind(this)}
          underlayColor='#99d9f4'
        >
          <Text style={styles.buttonText}>Chat</Text>
        </TouchableHighlight>

      </View>
    );
  }
}

export default Home;
