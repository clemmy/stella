'use strict';

import React, { StyleSheet, TouchableHighlight, Component, View, Text } from 'react-native';

let styles = StyleSheet.create({
  container: {
    height: 60,
    borderColor: '#48BBEC',
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

class Votable extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { state, dispatch } = this.props;

    return (
      <TouchableHighlight onPress={this.props.onPress} underlayColor='rgba(0,0,0,0)'>
        <View style={[styles.container, this.props.selected ? { backgroundColor: '#99d9f4' } : { backgroundColor: 'white' } ]}>
          <Text style={styles.text} numberOfLines={1}>
            {this.props.choice.text}
          </Text>
        </View>
      </TouchableHighlight>
    );
  }
}

Votable.propTypes = {
  choice: React.PropTypes.shape({
      text: React.PropTypes.string.isRequired
    }).isRequired,
  selected: React.PropTypes.bool
};

export default Votable;
