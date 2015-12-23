'use strict';

import React from 'react-native'
import PollItem from '../components/polls/PollItem'

let { 
  StyleSheet,
  ListView,
  Text,
} = React



export default class SquadPolls extends React.Component { 
  constructor(props) {
    super(props)
    let ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
    this.state = { polls: ds.cloneWithRows(this.props.polls)}
  }

  render() {
    console.log(this.state.polls)
    return (
      <ListView
        dataSource={this.state.polls}
        renderRow={(rowData) => {
          return (<PollItem navigator={this.props.navigator} item={rowData} />)
        }}
      />
    )
  }
}

let styles = StyleSheet.create({
  container: {
    flex: 1
  }
})
