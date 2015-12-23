import React from 'react-native'
import PollDetail from './PollDetail'

let {
  TouchableHighlight,
  Text,
  View,
  StyleSheet,
} = React



export default class PollItem extends React.Component {

  goToPollDetail(event) {
    this.props.navigator.push({
      title: this.props.item.title,
      component: PollDetail,
      passProps: { poll: this.props.item }
    })
  }

  render() {
    return (
      <TouchableHighlight onPress={this.goToPollDetail.bind(this)}>
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
    paddingTop: 30,
    paddingBottom: 30,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
})
