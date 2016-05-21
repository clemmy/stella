'use strict';

import React from 'react';
import { StyleSheet, TouchableOpacity, TouchableHighlight, Component, View, Text } from 'react-native';

const NAV_BAR_HEIGHT = 39;
const STATUS_BAR_HEIGHT = 20;
const NAV_HEIGHT = NAV_BAR_HEIGHT + STATUS_BAR_HEIGHT;
let styles = StyleSheet.create({
  navBarContainer: {
    backgroundColor: 'yellow',
    paddingTop: 10,
    paddingBottom: 10
  },
  navBarButtonText: {
    fontSize: 17,
    letterSpacing: 0.5
  }
});

class Navbar extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { state, dispatch } = this.props;

    return (
      <View style={[styles.navBarContainer]}>
        <TouchableOpacity onPress={this.props.goBack}>
          <View>
            <Text style={[styles.navBarButtonText]}>&lt; Back</Text>
          </View>
        </TouchableOpacity>
      </View>
    );
  }
}

export default Navbar;
