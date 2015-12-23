'use strict';

import React from 'react-native'

let {
  Text,
  View,
  StyleSheet,
  ListView,
} = React 



export default class PollDetail extends React.Component {
  constructor(props) {
    super(props)
    let ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
    this.state = { choices: ds.cloneWithRows(this.props.poll.choices)}
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>{this.props.poll.title}</Text>
        <ListView
          dataSource={this.state.choices}
          renderRow={(rowData) => {
            return (<Text>{rowData.text}</Text>)
          }}
        />
      </View>
    )
  }
}

let styles = StyleSheet.create({
  container: {
    flex: 1
  },
  title: {
    marginTop: 100,
    fontSize: 32
  }
})
