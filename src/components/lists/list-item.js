let React = require('react-native');
let {
  Text,
  TextInput,
  View
} = React;

let ListItem = React.createClass({
  getInitialState: function() {
    return {
      text: this.props.text
    }
  },

  render: function() {
    return <View>
      <Text>Input text below:</Text>
      <TextInput
        style={{height: 40, borderColor: 'gray', borderWidth: 1}}
        onChangeText={(newText) => this.setState({text: newText})}
        value={this.state.text}
      />
      <Text
        style={{height: 30, borderColor: 'yellow', borderWidth: 2, justifyContent:'center'}}
        onPress={this.handlePress}>
        Undo above
      </Text>
    </View>
  },

  handlePress: function(event) {
    this.setState({text: this.props.text})
  }
});

export default ListItem;
