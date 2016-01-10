'use strict';

import React, { Navigator, Component, View, Text } from 'react-native';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux/native';
import Login from '../components/login';
import Home from '../components/home';

const routes = {
  login: Login,
  home: Home
};

class Stella extends Component {
  constructor(props) {
    super(props);
  }

  renderScene(route, navigator) {
    let Component = routes[route.name];
    return <Component navigator={navigator} route={route} />;
  }

  render() {
    const { state, dispatch } = this.props;

    return (
      <Navigator
        initialRoute={{ name: 'login' }}
        renderScene={this.renderScene}
        configureScene={() => { return Navigator.SceneConfigs.FloatFromRight; }}
        />
    );
  }
}

export default connect()(Stella);
