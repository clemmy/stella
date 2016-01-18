'use strict'

/*
 * Imports
 */
let React = require('react-native');
let {
  ListView,
  StyleSheet,
  Text,
  TouchableHighlight,
  View
} = React;
import { setRoute } from '../../actions';

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
  },
  { // LISTS INSTANCE
    title: 'Shopping',
    items: [
      { // ITEM INSTANCE
        text: 'Eggs'
      },
      { // ITEM INSTANCE
        text: 'Bread'
      },
      { // ITEM INSTANCE
        text: 'Milk'
      },
      { // ITEM INSTANCE
        text: 'Butter'
      },
      { // ITEM INSTANCE
        text: 'Apples'
      },
      { // ITEM INSTANCE
        text: 'Orange Juice'
      },
      { // ITEM INSTANCE
        text: 'Peas'
      },
    ]
  }
];

/*
 * Styling
 */
let styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'stretch'
  },
  headerText: {
    flex: 1,
    fontSize: 32,
    fontWeight: 'bold',
  },
  listViewWrapper: {
    flex: 17
  },
  rowWrapper: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-around'
  },
  rowImageWrapper: {
    flex: 2
  },
  rowContentWrapper: {
    flex: 5
  },
  rowTitle: {
    fontSize: 18,
    fontWeight: 'bold'
  },
  rowText: {
    fontSize: 18
  },
  addButtonWrapper: {
    flex: 2,
    alignItems: 'center',
    justifyContent: 'center'
  },
  addButtonText: {
    fontSize: 48,
    fontWeight: 'bold'
  }
});

/*
 * Class declaration
 */
let Lists = React.createClass({
  getInitialState: function() {
    let ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
    return {
      lists: MOCKDATA,
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
      {this._addButton()}
      </View>
    );
  },

  _renderRow: function(rowData) {
    return (
      <TouchableHighlight
        underlayColor="grey"
        onPress={this._goToListDetails.bind(this, rowData)}
      >
        <View style={[styles.rowWrapper, border('green')]}>
          <View style={[styles.rowImageWrapper, border('purple')]}>
            <Text>Image here</Text>
          </View>
          <View style={[styles.rowContentWrapper, border('brown')]}>
            <Text style={styles.rowTitle}>{rowData.title}</Text>
            <Text style={styles.rowText}>Number of items: {rowData.items.length}</Text>
          </View>
        </View>
      </TouchableHighlight>
    );
  },

  _addButton: function() {
    return (
      <View style={[styles.addButtonWrapper, border('purple')]}>
        <Text
          style={[styles.addButtonText]}
          onPress={this._handleAddPress}
        >
          +
        </Text>
      </View>
    );
  },

  _handleAddPress: function() {
    let ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
    let newLists = this.state.lists.concat([{
      title: 'New List',
      items: [{text: 'Placeholder'}]
    }]);
    this.setState({
      lists: newLists,
      dataSource: ds.cloneWithRows(newLists)
    });
  },

  _goToListDetails(listDetails, event) {
    this.props.navigator.push({
      name: 'listDetails',
      listDetails: listDetails
    });
    this.dispatch(setRoute('listDetails'))
  },

  dispatch: function() {
    this.props.dispatch;
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
