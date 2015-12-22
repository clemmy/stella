import React from 'react-native'

let {
  TouchableHighlight,
  Text,
  View,
  StyleSheet,
} = React



export default class PollItem extends React.Component {
  render() {
    return (
      <TouchableHighlight>
        <View style={styles.itemContainer}>
          <Text>{this.props.item.title}</Text>
          <Text>by {this.props.item.author}</Text>
        </View>
      </TouchableHighlight>
    )
  }
}


let styles = StyleSheet.create({
  itemContainer: {
    paddingTop: 10,
    paddingBottom: 10,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
})
