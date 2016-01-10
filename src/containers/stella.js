'use strict';

import React, { BackAndroid, Navigator, Component, View, Text } from 'react-native';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux/native';
import Login from '../components/login';
import Home from '../components/home';
import Polls from '../components/polls';
import Navbar from '../components/navbar';
import _ from 'lodash';
import { setRoute } from '../actions';

const routes = {
  login: Login,
  home: Home,
  polls: Polls
};

const routesToHideNavBarFor = ['login'];

class Stella extends Component {
  constructor(props) {
    super(props);
    BackAndroid.addEventListener('hardwareBackPress', this.goBack.bind(this));
  }

  renderScene(route, navigator) {
    let Component = routes[route.name];
    return <Component
      navigator={navigator}
      route={route}
      />;
  }

  goBack() {
    if (this.refs.navigatorRef.navigationContext.currentRoute.name !== 'home') {
      this.refs.navigatorRef.pop();
      const { dispatch }  = this.props;
      dispatch(setRoute(this.refs.navigatorRef.navigationContext.currentRoute.name));
      return true;
    }
    return false;
  }

  render() {
    const { state, dispatch, route } = this.props;

    return (
      <View style={{flex:1}}>
        {
          !_.includes(routesToHideNavBarFor, route) ? (
            <Navbar goBack={this.goBack.bind(this)}/>
          ) : null
        }
        <Navigator
          ref="navigatorRef"
          initialRoute={{ name: 'login' }}
          renderScene={this.renderScene.bind(this)}
          configureScene={() => { return Navigator.SceneConfigs.FloatFromRight; }}
          />
      </View>
    );
  }
}

export default connect((state) => {
  console.log(state);
  return {
    route: state.route
  };
})(Stella);
