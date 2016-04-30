'use strict';

import React, { StyleSheet, Component, TextInput, View, Text, TouchableHighlight } from 'react-native';
import { setRoute, addPoll } from '../../actions';
import { connect } from 'react-redux/native';
import t from 'tcomb-form-native';
import _ from 'lodash';
import { List } from 'immutable';
import stylesheet from './../../../node_modules/tcomb-form-native/lib/stylesheets/bootstrap';
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

    this.state = {
      title: null,
      pollOptions: List([
        {
          value: null
        },
        {
          value: null
        },
        {
          value: null
        }
      ])
    };
  }

  onCreatePress(event) {
    let { dispatch } = this.props;

    let newPoll = _.assign({}, this.refs.form.getValue(), {
      pollOptions: this.state.pollOptions.toIndexedSeq().filter((option) => !!option.value).toList(),
      author: this.props.user.get('email')
    });

    if (newPoll.pollOptions.size > 0) {
      dispatch(addPoll(newPoll));

      this.props.navigator.pop();
      dispatch(setRoute('polls'));
    } else {
      throw new Error('Must have at least 1 option.');
    }
  }

  onAddOptionPress(event) {
    this.setState({
      pollOptions: this.state.pollOptions.concat({ value: null })
    });
  }

  render() {
    const { state, dispatch } = this.props;

    return (
      <View style={styles.container}>
        <Form
          ref="form"
          type={Poll}
          options={options}
          value={this.state}
          onChange={(value, path) => {
            this.setState({
              title: value.title
            });
          }}
        />

        {
          this.state.pollOptions.toIndexedSeq().map((option, index) => (
            <View key={'option' + index}>
              <TextInput
                style={stylesheet.textbox.normal}
                placeholder={'Option ' + (index + 1)}
                onChangeText={(text) => {
                  this.setState({
                    pollOptions: this.state.pollOptions.set(index, _.assign({}, option, { value: text }))
                  });
                }}
              />
            </View>
          ))
        }
        <TouchableHighlight onPress={this.onAddOptionPress.bind(this)} style={styles.button} underlayColor='#99d9f4'>
          <Text style={styles.buttonText}>Add option</Text>
        </TouchableHighlight>
        <TouchableHighlight onPress={this.onCreatePress.bind(this)} style={styles.button} underlayColor='#99d9f4'>
          <Text style={styles.buttonText}>Create</Text>
        </TouchableHighlight>
      </View>
    );
  }
}

export default connect((state) => {
  return {
    route: state.route,
    user: state.user
  };
})(CreatePollForm);
