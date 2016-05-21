'use strict';

import React from 'react';
import { StyleSheet, TouchableHighlight, Component, View, Text, ListView } from 'react-native';
import Immutable from 'immutable';
import ChoiceBar from './choiceBar';

let styles = StyleSheet.create({
  container: {
    padding: 8
  },
  title: {
    fontSize: 22
  },
  resultLabel: {
    fontSize: 12
  }
});

class PollResults extends Component {
  constructor(props) {
    super(props);

    this.state = {
      dataSource: new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2})
    };
  }

  render() {
    const { state, dispatch } = this.props;

    // look into text aligns, overlaying? (not block elements), absolute/relative positioning

    return (
      <View style={styles.container}>
        <Text style={styles.resultLabel}>
          {"Results:"}
        </Text>
        <Text style={styles.title}>
          {this.props.poll.title}
        </Text>
        <ListView
          dataSource={this.state.dataSource.cloneWithRows(this.props.poll.choices.toJS())}
          renderRow={(rowData) => (
            <ChoiceBar choice={rowData} numVotes={1} totalVotes={2} />
          )}
        />
      </View>
    );
  }
}

PollResults.propTypes = {
  choice: React.PropTypes.shape({
      text: React.PropTypes.string.isRequired
    }).isRequired,
  poll: React.PropTypes.shape({
      title: React.PropTypes.string.isRequired,
      author: React.PropTypes.string.isRequired,
      choices: React.PropTypes.instanceOf(Immutable.List)
    }).isRequired
};

export default PollResults;
