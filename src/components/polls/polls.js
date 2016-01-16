'use strict';

import React, { StyleSheet, ListView, TouchableHighlight, Component, View, Text } from 'react-native';
import { setRoute } from '../../actions';
import { connect } from 'react-redux/native';

let styles = StyleSheet.create({
});

class Polls extends Component {
  constructor(props) {
    super(props);

    this.state = {
      dataSource: new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2})
    };
  }

  goToPoll(event) {
    this.props.navigator.push({
      name: 'pollDetail'
    });
    this.props.dispatch(setRoute('pollDetail'));
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
          renderRow={(rowData) => <Text>{rowData.title}</Text>}
        />
        <TouchableHighlight onPress={this.goToCreatePollForm.bind(this)}>
          <Text>
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
