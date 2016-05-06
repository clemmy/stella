'use strict';

import React, { StyleSheet, TouchableHighlight, Component, View, Text, ListView } from 'react-native';
import { connect } from 'react-redux/native';
import { setRoute } from '../../../actions';
import Votable from './votable';
import Immutable from 'immutable';

let styles = StyleSheet.create({
});

class PollVote extends Component {
  constructor(props) {
    super(props);

    console.log(props);
    console.log(this.props);

    this.state = {
      dataSource: new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2})
    };
  }

  onChoiceSelected(choice, event) {
    
  }

  goToResults() {
    this.props.navigator.push({
      name: 'pollResults',
      props: {
        poll: this.props.poll
      }
    });
    this.props.dispatch(setRoute('pollResults'));
  }

  render() {
    const { state, dispatch } = this.props;

    return (
      <View style={styles.container}>
        <Text>
          Poll vote VIEW
          {this.props.poll.title}
          {this.props.poll.author}
        </Text>

        <ListView
          dataSource={this.state.dataSource.cloneWithRows(this.props.poll.choices.toJS())}
          renderRow={(rowData) => (
            <Votable choice={rowData} onPress={this.onChoiceSelected.bind(this, rowData) } />
          )}
        />

        <TouchableHighlight underlayColor='#99d9f4' onPress={this.goToResults.bind(this)}>
          <Text>See results</Text>
        </TouchableHighlight>
      </View>
    );
  }
}

PollVote.propTypes = {
  poll: React.PropTypes.shape({
      title: React.PropTypes.string.isRequired,
      author: React.PropTypes.string.isRequired,
      choices: React.PropTypes.instanceOf(Immutable.List)
    }).isRequired
};

export default connect((state) => {
  return {
    route: state.route,
    polls: state.polls
  };
})(PollVote);
