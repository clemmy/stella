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
        <TouchableHighlight style={styles.button} onPress={this.goToPolls.bind(this)}>
          <Text>Polls</Text>
        </TouchableHighlight>
        <TouchableHighlight style={styles.button} onPress={this.goToLists.bind(this)}>
          <Text>Lists</Text>
        </TouchableHighlight>
        <TouchableHighlight style={styles.button} onPress={this.goToEvents.bind(this)}>
          <Text>Events</Text>
        </TouchableHighlight>
      </View>
    );
  }

}

let styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  button: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  }
})

