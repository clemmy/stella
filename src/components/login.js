'use strict';

import React from 'react';
import { StyleSheet, Component, View, Text, TouchableHighlight } from 'react-native';
import { setRoute, login } from '../actions';
import { connect } from 'react-redux';
import buttonStyles from '../styles/button';
import t from 'tcomb-form-native';
let Form = t.form.Form;

let User = t.struct({
  email: t.String,
  password: t.String
});
let options = {
  fields: {
    email: {
      label: 'Email',
      error: 'Must be a valid email address'
    },
    password: {
      label: 'Password',
      password: true
    }
  }
};
let styles = StyleSheet.create({
  ...buttonStyles,
  container: {
    justifyContent: 'center',
    marginTop: 50,
    padding: 20,
    backgroundColor: '#ffffff',
  }
});

class Login extends Component {
  constructor(props) {
    super(props);
  }

  onLoginPress(event) {
    var loginInfo = this.refs.form.getValue();

    let { dispatch } = this.props;
    dispatch(login(loginInfo, this.props.navigator));
  }

  render() {
    const { state, dispatch } = this.props;

    return (
      <View style={styles.container}>
        <Form
          ref="form"
          type={User}
          options={options}
        />
        <TouchableHighlight onPress={this.onLoginPress.bind(this)} style={styles.button} underlayColor='#99d9f4'>
          <Text style={styles.buttonText}>Log in</Text>
        </TouchableHighlight>
      </View>
    );
  }
}

export default connect((state) => {
  return {
    route: state.route
  };
})(Login);
