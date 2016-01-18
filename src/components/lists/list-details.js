'use strict'

/*
 * Imports
 */
let React = require('react-native');
let {
  ListView,
  StyleSheet,
  Text,
  TextInput,
  View
} = React;

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
let ListDetails = React.createClass({
  getInitialState: function() {
    let listDetails = this.props.route.listDetails;
    let ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
    return {
      title: listDetails.title,
      items: listDetails.items,
      dataSource: ds.cloneWithRows(listDetails.items)
    }
  },

  render: function() {
    return (
      <View style={[styles.container, border('yellow')]}>
        <TextInput
          style={[styles.headerText, border('blue')]}
          onChange={(text) => this.setState({text})}
          value={this.state.title}
        />
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
      <View style={[styles.rowWrapper, border('green')]}>
        <Text style={styles.rowText}>{rowData.text}</Text>
      </View>
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
    let newItems = this.state.items.concat([{
      text: 'New item'
    }]);
    this.setState({
      items: newItems,
      dataSource: ds.cloneWithRows(newItems)
    });
  },
});

let border = function(color: string) {
  return {
    borderColor: color,
    borderWidth: 4
  }
}

/*
 * Export
 */
export default ListDetails;
