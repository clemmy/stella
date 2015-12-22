'use strict';

import React from 'react-native'
import SquadPolls from './SquadPolls'
import dummyPolls from '../../mocks/polls'

let {
  StyleSheet,
  Text,
  View,
  TouchableHighlight,
} = React;



export default class SquadHome extends React.Component {

  goToPolls(event) {
    // Fetch Polls
    this.props.navigator.push({
      title: 'Polls',
      component: SquadPolls,
      passProps: { polls: dummyPolls }
    })
  }

  goToLists(event) {
    console.log(event)
  }

  goToEvents(event) {
    console.log(event)
  }

  render() {
    return (
      <View style={styles.container}>

        <TouchableHighlight 
          style={[styles.baseButton, styles.pollButton]} 
          onPress={this.goToPolls.bind(this)}
        >
          <Text style={styles.buttonText}>Polls</Text>
        </TouchableHighlight>

        <TouchableHighlight 
          style={[styles.baseButton, styles.listButton]}
          onPress={this.goToLists.bind(this)}
        >
          <Text style={styles.buttonText}>Lists</Text>
        </TouchableHighlight>

        <TouchableHighlight 
          style={[styles.baseButton, styles.eventButton]}
          onPress={this.goToEvents.bind(this)}
        >
          <Text style={styles.buttonText}>Events</Text>
        </TouchableHighlight>

      </View>
    );
  }

}

let styles = StyleSheet.create({
  container: {
    flex: 1,
     marginTop: 40
  },
  buttonText: {
    fontSize: 24
  },
  baseButton: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  pollButton: {
    backgroundColor: '#e74c3c',
  },
  listButton: {
    backgroundColor: '#f1c40f',
  },
  eventButton: {
    backgroundColor: '#2ecc71',
  },
})

