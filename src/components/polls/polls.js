'use strict';

import React, { StyleSheet, ListView, TouchableHighlight, Component, View, Text } from 'react-native';
import { setRoute } from '../../actions';
import { connect } from 'react-redux/native';
import PollListItem from './pollListItem';
import buttonStyles from '../../styles/button';

let styles = StyleSheet.create({
  ...buttonStyles,
  container: {
    padding: 8
  }
});

class Polls extends Component {
  constructor(props) {
    super(props);

    this.state = {
      dataSource: new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2})
    };
  }

  goToPoll(poll, event) {
    //TODO: if poll.voters.contains(user), then go to pollResults
    this.props.navigator.push({
      name: 'pollVote',
      props: {
        poll: poll
      }
    });
    this.props.dispatch(setRoute('pollVote'));
  }

  goToCreatePollForm(event) {
    this.props.navigator.push({
      name: 'createPollForm'
    });
    this.props.dispatch(setRoute('createPollForm'));
  }

  render() {
    const { state, dispatch } = this.props;

    return (
      <View style={styles.container}>
        <ListView
          dataSource={this.state.dataSource.cloneWithRows(this.props.polls.toJS())}
          renderRow={(rowData) => (
            <PollListItem poll={rowData} onPress={this.goToPoll.bind(this, rowData) } />
          )}
        />
        <TouchableHighlight onPress={this.goToCreatePollForm.bind(this)} style={[styles.button, {marginTop: 6}] } underlayColor='#99d9f4'>
          <Text style={styles.buttonText}>
            Add poll
          </Text>
        </TouchableHighlight>
      </View>
    );
  }
}

export default connect((state) => {
  return {
    route: state.route,
    polls: state.polls
  };
})(Polls);
