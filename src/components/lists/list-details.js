'use strict'

/*
 * Imports
 */
let React = require('react-native');
let {
  ListView,
  View
} = React;

let listDetails = React.createClass({
  getInitialState: function() {
    let ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
    return {
      items: this.props.items,
      dataSource: ds.cloneWithRows(this.props.items)
    }
  },

  render: function() {
    return (
      <View>
        <Image
          source={}
        />
        <Text>LIST TITLE</Text>
        <ListView
          dataSource={this.state.dataSource}
          renderRow={(rowData) => {
            return (<Text>{rowData.text}</Text>)
          }}
        />
      </View>
    );
  }
});
