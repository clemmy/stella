'use strict';

import React from 'react';
import { StyleSheet, Component, View, Text } from 'react-native';

let styles = StyleSheet.create({
  container: {
    height: 60,
    borderColor: '#48BBEC',
    backgroundColor: 'white',
    borderWidth: 1,
    alignSelf: 'stretch',
    justifyContent: 'center',
    marginTop: 4,
    padding: 6
  },
  text: {
    fontSize: 18
  }
});

class ChoiceBar extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { state, dispatch } = this.props;

    return (
      <View style={styles.container}>
        <Text style={styles.text} numberOfLines={1}>
          {this.props.choice.text}
        </Text>
      </View>
    );
  }
}

ChoiceBar.propTypes = {
  choice: React.PropTypes.shape({
      text: React.PropTypes.string.isRequired
    }).isRequired
};

export default ChoiceBar;
