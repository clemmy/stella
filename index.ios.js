'use strict';

import React from 'react-native'
import SquadHome from './src/views/SquadHome'

let {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  NavigatorIOS,
} = React;

class SquadMobile extends React.Component {
  render() {
    return (
      <NavigatorIOS 
        style={styles.container}
        initialRoute={{
          title: 'Squad',
          component: SquadHome,
        }}
      />
    );
  }
}

let styles = StyleSheet.create({
  container: { flex: 1 },
});

AppRegistry.registerComponent('SquadMobile', () => SquadMobile);
