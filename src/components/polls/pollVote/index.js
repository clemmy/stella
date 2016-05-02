'use strict';

import React, { StyleSheet, TouchableHighlight, Component, View, Text } from 'react-native';
import { connect } from 'react-redux/native';
import { setRoute } from '../../../actions';

let styles = StyleSheet.create({
});

class PollVote extends Component {
  constructor(props) {
    super(props);

    console.log(props);
    console.log(this.props);
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

        <TouchableHighlight underlayColor='#99d9f4' onPress={this.goToResults.bind(this)}>
          <Text>See results</Text>
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
})(PollVote);
