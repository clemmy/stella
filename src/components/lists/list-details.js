'use strict'

/*
 * Imports
 */
let React = require('react-native');
let {
  ListView,
  StyleSheet,
  Text,
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
    fontSize: 24,
    fontWeight: 'bold',
  },
  listViewWrapper: {
    flex: 19
  },
  rowWrapper: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-around'
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
      dataSource: ds.cloneWithRows(listDetails.items)
    }
  },

  render: function() {
    return (
      <View style={[styles.container, border('yellow')]}>
        <Text style={[styles.headerText, border('blue')]}>{this.state.title}</Text>
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
      <View style={[styles.rowWrapper, border('green')]}>
        <Text>{rowData.text}</Text>
      </View>
    );
  }
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
