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
    let { queryAddress } = this.props
    this.props.updateLocation(queryAddress)
  },

  renderRow: function(rowData) {
    return (
      <Location address={rowData.formatted_address}
                />
    )
  },

  render: function() {
    // console.log(this.props.location)
    let streetNo = this.props.streetNo

    console.log('---LOCATION---')
    console.log(this.props.location)
    return (
      <View style={styles.container}>
        <ListView
          dataSource={this.state.dataSource.cloneWithRows(this.props.location)}
          renderRow={this.renderRow}
        />
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
//   dataSource={this.state.dataSource.cloneWithRows(this.props.location)}
//   renderRow={this.renderRow}
// />
