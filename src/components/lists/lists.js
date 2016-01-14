'use strict'

let React = require('react-native');
let {
  ListView
} = React;
let ListPreview = require('./list-preview');

let MOCKDATA = [
  { // LIST INSTANCE
    id: 1,
    author: {
      id: 1337,
      fname: 'Tim',
      lname: 'Pham'
    },
    contributors: {},
    picture: null,
    title: 'List #1',
    items: [
      { // LIST ITEM INSTANCE
        id: 11,
        author: {
          id: 1337,
          fname: 'Tim',
          lname: 'Pham'
        },
        contributors: {},
        checked: false,
        text: 'List #1 - Item #1',
      },
      { // LIST ITEM INSTANCE
        id: 22,
        author: {
          id: 1337,
          fname: 'Tim',
          lname: 'Pham'
        },
        contributors: {},
        checked: true,
        text: 'List #1 - Item#2',
      },
      { // LIST ITEM INSTANCE
        id: 33,
        author: {
          id: 1337,
          fname: 'Tim',
          lname: 'Pham'
        },
        contributors: {},
        checked: false,
        text: 'List #1 - Item #3',
      }
    ]
  },
  { // LIST INSTANCE
    id: 2,
    author: {
      id: 1337,
      fname: 'Tim',
      lname: 'Pham'
    },
    contributors: {},
    picture: null,
    title: 'List #2',
    items: [
      { // LIST ITEM INSTANCE
        id: 211,
        author: {
          id: 1337,
          fname: 'Tim',
          lname: 'Pham'
        },
        contributors: {},
        checked: true,
        text: 'List #2 - Item #1',
      },
      { // LIST ITEM INSTANCE
        id: 222,
        author: {
          id: 1337,
          fname: 'Tim',
          lname: 'Pham'
        },
        contributors: {},
        checked: true,
        text: 'List #2 - Item#2',
      },
      { // LIST ITEM INSTANCE
        id: 233,
        author: {
          id: 1337,
          fname: 'Tim',
          lname: 'Pham'
        },
        contributors: {},
        checked: false,
        text: 'List #2 - Item #3',
      }
    ]
  }
];

/*
 * Lists - Component Declaration
 */
let Lists = React.createClass({
  getInitialState: function() {
    let ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
    return {
      dataSource: ds.cloneWithRows(['row 1', 'row 2'])
    };
  },

  render: function() {
    return (
      <ListView
        dataSource={this.state.dataSource}
        renderRow={this._renderRow}
      />
    );
  },

  _renderRow: function(rowData) {
    return (
      <ListPreview {...rowData} />
    );
  }
});

export default Lists;
