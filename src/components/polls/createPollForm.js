'use strict';

import React, { StyleSheet, Component, View, Text, TouchableHighlight } from 'react-native';
import { setRoute, addPoll } from '../../actions';
import { connect } from 'react-redux/native';
import t from 'tcomb-form-native';
let Form = t.form.Form;

let Poll = t.struct({
  title: t.String
});
let options = {
  fields: {
    title: {
      label: 'Title',
      error: 'Must be a valid title'
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

class CreatePollForm extends Component {
  constructor(props) {
    super(props);
  }

  onCreatePress(event) {
    let { dispatch } = this.props;

    let newPoll = this.refs.form.getValue();
    dispatch(addPoll(newPoll));

    this.props.navigator.pop();
    dispatch(setRoute('polls'));
  }

  render() {
    const { state, dispatch } = this.props;

    return (
      <View style={styles.container}>
        <Form
          ref="form"
          type={Poll}
          options={options}
        />
        <TouchableHighlight onPress={this.onCreatePress.bind(this)} style={styles.button} underlayColor='#99d9f4'>
          <Text style={styles.buttonText}>Create</Text>
        </TouchableHighlight>
      </View>
    );
  }
}

export default connect((state) => {
  return {
    route: state.route
  };
})(CreatePollForm);
