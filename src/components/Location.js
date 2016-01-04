const React = require('react-native')
const {
  Component,
  StyleSheet,
  Text,
  View
} = React

class Location extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return(
      <View style={styles.container}>
        <Text>
          {this.props.address}
        </Text>
      </View>
    )
  }
}

module.exports = Location

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginBottom: 5
  }
});
