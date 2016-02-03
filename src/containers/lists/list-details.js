'use strict'

/*
 * Imports
 */
import React, {
  Component,
  ListView,
  StyleSheet,
  Text,
  TextInput,
  View
} from 'react-native';

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
class ListDetails extends Component {
  constructor(props) {
    super(props);

    let listDetails = this.props.route.listDetails;
    let ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
    this.state = {
      title: listDetails.title,
      items: listDetails.listItems,
      dataSource: ds.cloneWithRows(listDetails.listItems)
    };

    this.renderRow = this.renderRow.bind(this);
    this.handleAddPress = this.handleAddPress.bind(this);
  }

  render() {
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
          renderRow={this.renderRow}
        />
      {this.addButton()}
      </View>
    );
  }

  renderRow(rowData) {
    return (
      <View style={[styles.rowWrapper, border('green')]}>
        <Text style={styles.rowText}>{rowData.text}</Text>
      </View>
    );
  }

  addButton() {
    return (
      <View style={[styles.addButtonWrapper, border('purple')]}>
        <Text
          style={[styles.addButtonText]}
          onPress={this.handleAddPress}
        >
          +
        </Text>
      </View>
    );
  }

  handleAddPress() {
    let ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
    let newItems = this.state.items.concat([{
      text: 'New item'
    }]);
    this.setState({
      items: newItems,
      dataSource: ds.cloneWithRows(newItems)
    });
  }
}

function border(color: string) {
  return {
    borderColor: color,
    borderWidth: 4
  };
}

/*
 * Export class
 */
export default ListDetails;
