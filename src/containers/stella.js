'use strict';

import React, { BackAndroid, Navigator, Component, View, Text } from 'react-native';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux/native';
import Login from '../components/login';
import Home from '../components/home';
import Polls from '../components/polls';

const routes = {
  login: Login,
  home: Home,
  polls: Polls
};

class Stella extends Component {
  constructor(props) {
    super(props);

    BackAndroid.addEventListener('hardwareBackPress', () => {
      if (this.refs.navigatorRef.navigationContext.currentRoute.name !== 'home') {
        this.refs.navigatorRef.pop();
        return true;
      }

      return false;
    });
  }

  renderScene(route, navigator) {
    let Component = routes[route.name];
    return <Component
      navigator={navigator}
      route={route}
      />;
  }

  render() {
    const { state, dispatch } = this.props;

    let navigatorInstance = (
      <Navigator
        ref="navigatorRef"
        initialRoute={{ name: 'login' }}
        renderScene={this.renderScene}
        configureScene={() => { return Navigator.SceneConfigs.FloatFromRight; }}
        />
    );

    return navigatorInstance;
  }
}

export default connect()(Stella);
