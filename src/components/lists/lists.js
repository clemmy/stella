'use strict'

/*
 * Imports
 */
let React = require('react-native');
let {
  ListView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View
} = React;

let MOCKDATA = [
  { // LISTS INSTANCE
    title: 'List #1',
    items: [
      { // ITEM INSTANCE
        text: 'List #1 - Item #1'
      },
      { // ITEM INSTANCE
        text: 'List #1 - Item #2'
      },
      { // ITEM INSTANCE
        text: 'List #1 - Item #3'
      }
    ]
  },
  { // LISTS INSTANCE
    title: 'List #2',
    items: [
      { // ITEM INSTANCE
        text: 'List #2 - Item #1'
      },
      { // ITEM INSTANCE
        text: 'List #2 - Item #2'
      },
      { // ITEM INSTANCE
        text: 'List #2 - Item #3'
      }
    ]
  }
];

/*
 * StyleSheet
 */
let styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'stretch'
  },
  headerText: {
    flex: 1,
    fontSize: 18,
    fontWeight: 'bold',
  },
  listViewWrapper: {
    flex: 19,
    justifyContent: 'space-around'
  },
  rowWrapper: {

  }
});

/*
 * Class declaration
 */
let Lists = React.createClass({
  getInitialState: function() {
    let ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
    return {
      dataSource: ds.cloneWithRows(MOCKDATA)
    }
  },

  render: function() {
    return (
      <View style={[styles.container, border('yellow')]}>
        <Text style={[styles.headerText, border('blue')]}>Lists</Text>
        <ListView
          style={[styles.listViewWrapper, border('red')]}
          dataSource={this.state.dataSource}
          renderRow={this._renderRow}
        />
      </View>
    );
  },

  _renderRow: function(rowData) {
    return (
      <TouchableOpacity
        onPress={this._onPressRow}
      >
        <View style={[styles.rowWrapper, border('green')]}>
          <Text>{rowData.title}</Text>
          <Text>Number of items: {rowData.items.length}</Text>
        </View>
      </TouchableOpacity>
    );
  },

  _onPressRow: function() {

  }
});

let border = function(color: string) {
  return {
    borderColor: color,
    borderWidth: 4
  }
}

/*
 * Export class
 */
export default Lists;
