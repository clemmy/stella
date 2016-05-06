'use strict';

import React, { StyleSheet, TouchableHighlight, Component, View, Text } from 'react-native';

let styles = StyleSheet.create({
  container: {
    height: 100,
    backgroundColor: 'white',
    borderColor: '#48BBEC',
    borderWidth: 1,
    alignSelf: 'stretch',
    justifyContent: 'center',
    marginTop: 4,
    padding: 6
  },
  text: {
    fontSize: 20,
    fontWeight: 'bold'
  }
});

class Votable extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { state, dispatch } = this.props;

    return (
      <TouchableHighlight onPress={this.props.onPress} underlayColor='#99d9f4'>
        <View style={styles.container}>
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
    }).isRequired
};

export default Votable;
