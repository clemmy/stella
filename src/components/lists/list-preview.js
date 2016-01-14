let React = require('react-native');
let {
  Image,
  Text,
  View
} = React;

let ListPreview = React.createClass({

  render: function() {
    return (
      <View>
        <Image
          source={require('./')}
        />
        <Text>{this.props.title}</Text>
        <Text>{this.props.items[0].text}</Text>
        <Text>{this.props.items[1].text}</Text>
        <Text>{this.props.items[2].text}</Text>
      </View>
    );
  }
});

export default ListPreview;
