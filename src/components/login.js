'use strict';

import React, { StyleSheet, Component, View, Text, TouchableHighlight } from 'react-native';
import { setRoute } from '../actions';
import { connect } from 'react-redux/native';
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
  container: {
    justifyContent: 'center',
    marginTop: 50,
    padding: 20,
    backgroundColor: '#ffffff',
  },
  buttonText: {
    fontSize: 18,
    color: 'white',
    alignSelf: 'center'
  },
  button: {
    height: 36,
    backgroundColor: '#48BBEC',
    borderColor: '#48BBEC',
    borderWidth: 1,
    borderRadius: 8,
    marginBottom: 10,
    alignSelf: 'stretch',
    justifyContent: 'center'
  }
});

class Login extends Component {
  constructor(props) {
    super(props);
  }

  onLoginPress(event) {
    var value = this.refs.form.getValue();
    console.log(value);

    let { dispatch } = this.props;
    // switch to home if successful
    this.props.navigator.push({
      name: 'home'
    });
    dispatch(setRoute('home'));
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
