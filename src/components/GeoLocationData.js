const Location = require('./Location')

const React = require('react-native')
const {
  StyleSheet,
  ListView,
  Text,
  TextInput,
  View
} = React

const GeoLocationData = React.createClass({
  getInitialState: function() {
    return {
      dataSource: new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2})
    }
  },


  componentDidMount() {
    let { location } = this.props
    this.props.updateLocation(location)
  },

  renderRow: function(rowData) {
    return (
      <View>
        <Text>
          {this.props.name}
        </Text>
      </View>
    )
  },

  render: function() {
    // console.log(this.props.location)
    // console.log('---LOCATION---')
    // console.log(this.props)
    return (
      <View style={styles.container}>
        <View>
          <Location />
        </View>
      </View>
    )
  }
})

module.exports = GeoLocationData


const styles = StyleSheet.create({
  activeUsersHeader: {
    flex: 1,
    alignSelf: 'center',
    fontSize: 20,
    paddingTop: 100,
    paddingBottom: 20
  },
  container: {
    padding: 20,
    marginTop: 65,
  },
  name: {
    flex: 5,
    fontSize: 14,
  },
  flowRight: {
    flexDirection: 'row',
    alignSelf: 'stretch'
  },
  incompleteCount: {
    flex: 1,
    textAlign: 'center',
    fontSize: 20,
    color: '#2196F3',
  },
  listView: {
    paddingTop: 2,
    backgroundColor: 'white',
  },
  loginButton: {
    textAlign: 'center',
    flex: 5,
  },
  loginLabels: {
    flex: 1,
    textAlign: 'left'
  },
  loginEntry: {
    height: 30,
    borderColor: 'gray',
    borderWidth: 1,
    flex: 5,
    marginBottom: 20
  }
});

// <ListView
//   dataSource={this.state.dataSource.cloneWithRows(location)}
//   renderRow={this.renderRow}
// />
