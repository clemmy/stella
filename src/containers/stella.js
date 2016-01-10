'use strict';

import React, { Component, View, Text } from 'react-native';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux/native';

class Stella extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { state, dispatch } = this.props;

    return (
      <View>
        <Text>
          Hello homies!
        </Text>
      </View>
    );
  }
}

export default connect()(Stella);
