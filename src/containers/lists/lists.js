'use strict'

/*
 * Imports
 */
import React, {
  Component,
  ListView,
  StyleSheet,
  Text,
  TouchableHighlight,
  View
} from 'react-native';
import { connect } from 'react-redux/native';
import { bindActionCreators } from 'redux';

import { fetchLists, createList, deleteList, setRoute } from '../../actions';

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
    flex: 4
  },
  rowContentWrapper: {
    flex: 10
  },
  rowTitle: {
    fontSize: 18,
    fontWeight: 'bold'
  },
  rowText: {
    fontSize: 18
  },
  rowDeleteWrapper: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  rowDeleteText: {
    fontSize: 18,
    fontWeight: 'bold'
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
class Lists extends Component {
  constructor(props) {
    super(props);

    let ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
    this.state = {
      lists: [],
      dataSource: ds.cloneWithRows([])
    };

    this.renderRow = this.renderRow.bind(this);
    this.handleRefreshPress = this.handleRefreshPress.bind(this);
    this.handleAddPress = this.handleAddPress.bind(this);
  }

  componentWillMount() {
    this.props.fetchLists(1);
  }

  componentWillReceiveProps(nextProps) {
    console.log('List received new props:', nextProps);
    let ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
    this.setState({
      lists: nextProps.lists,
      dataSource: ds.cloneWithRows(nextProps.lists)
    });
  }

  render() {
    return (
      <View style={[styles.container, border('yellow')]}>
        <Text style={[styles.headerText, border('blue')]}>Lists</Text>
        <ListView
          style={[styles.listViewWrapper, border('red')]}
          dataSource={this.state.dataSource}
          renderRow={this.renderRow}
        />
      {this.refreshButton()}
      {this.addButton()}
      </View>
    );
  }

  renderRow(rowData) {
    return (
      <TouchableHighlight
        underlayColor="grey"
        onPress={this.goToListDetails.bind(this, rowData)}
      >
        <View style={[styles.rowWrapper, border('green')]}>

          <View style={[styles.rowImageWrapper, border('purple')]}>
            <Text>Image here</Text>
          </View>

          <View style={[styles.rowContentWrapper, border('brown')]}>
            <Text style={styles.rowTitle}>{rowData.title}</Text>
            <Text style={styles.rowText}>Number of items: {rowData.listItems.length}</Text>
          </View>

          <TouchableHighlight
            underlayColor="grey"
            onPress={this.handleDeletePress.bind(this, rowData.id)}
            style={[styles.rowDeleteWrapper, border('blue')]}
          >
            <View style={[styles.rowDeleteWrapper, border('red')]}>
              <Text style={[styles.rowDeleteText]}>
                X
              </Text>
            </View>
          </TouchableHighlight>

        </View>
      </TouchableHighlight>
    );
  }

  refreshButton() {
    return (
      <View style={[styles.addButtonWrapper, border('purple')]}>
        <Text
          style={[styles.addButtonText]}
          onPress={this.handleRefreshPress}
        >
          REFRESH
        </Text>
      </View>
    );
  }

  handleRefreshPress() {
    this.props.fetchLists(1);
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
    this.props.createList(2, 1);
  }

  handleDeletePress(id, event) {
    this.props.deleteList(id);
  }

  goToListDetails(listDetails, event) {
    this.props.navigator.push({
      name: 'listDetails',
      listDetails: listDetails
    });
    this.props.setRoute('listDetails');
  }
}

function mapStateToProps({ lists }) {
  return { lists };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ fetchLists, createList, deleteList, setRoute }, dispatch);
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
export default connect(mapStateToProps, mapDispatchToProps)(Lists);

/**
 * List model
 {
   id        : Integer,
   title     : String,
   createdAt : Date,
   updatedAt : Date,
   isActive  : Boolean,
   userId    : Integer,
   SquadId   : Integer,
   listItems : [
     ...
     {
       text          : String,
       createdAt     : Date,
       updatedAt     : Date,
       completed     : Boolean,
       addedByUserId : Integer,
     }
     ...
   ]
 }
*/
