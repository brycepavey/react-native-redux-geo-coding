'use strict'
const Location = require('./Location')
const React = require('react-native');

const {
  ListView,
  StyleSheet,
  Text,
  TextInput,
  View,
  TouchableHighlight,
  ActivityIndicatorIOS,
  Image,
  Component
} = React;

const GeoLocationSearch = React.createClass ({
  getInitialState: function() {
    return {
      dataSource: new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2}),
      searchString: '158 City Road Melbourne',
    }
  },

  renderRow: function(rowData) {
    return (
      <Location
        address={rowData.formatted_address}
      />
    )
  },

  onSearchTextChanged: function(event) {
    this.setState({ searchString: event.nativeEvent.text.trim().split(' ').join('+') });
    console.log(this.state.searchString.trim().split(' ').join('+'));
  },

  _executeQuery: function(query) {
    // this.setState({ isLoading: true });
    this.props.updateLocation(this.state.searchString)
  },

  render: function() {
    var spinner = this.props.isLoading ?
      ( <ActivityIndicatorIOS
          hidden='true'
          size='large'/> ) :
      ( <View/> );

    return (
      <View style={styles.container}>
        <Text style={styles.description}>
          Search Location
        </Text>
        <View style={styles.flowRight}>
          <TextInput
            style={styles.searchInput}
            value={this.state.searchString}
            onChange={this.onSearchTextChanged}
            placeholder='Search via address'
          />
          <TouchableHighlight style={styles.button}
            underlayColor='#99d9f4'>
            <Text
              style={styles.buttonText}
              onPress={this._executeQuery}>
              Go
            </Text>
          </TouchableHighlight>
        </View>
        <View>
          <ListView
            dataSource={this.state.dataSource.cloneWithRows(this.props.location)}
            renderRow={this.renderRow}
          />
        </View>
        {spinner}
        <Text style={styles.description}>{this.state.message}</Text>

      </View>
    )
  }
})
module.exports = GeoLocationSearch;


var styles = StyleSheet.create({
  description: {
    marginBottom: 20,
    fontSize: 18,
    textAlign: 'center',
    color: '#656565'
  },
  container: {
    padding: 30,
    marginTop: 65,
    alignItems: 'center'
  },
  flowRight: {
    flexDirection: 'row',
    alignItems: 'center',
    alignSelf: 'stretch'
  },
  buttonText: {
    fontSize: 18,
    color: 'white',
    alignSelf: 'center'
  },
  button: {
    height: 36,
    flex: 1,
    flexDirection: 'row',
    backgroundColor: '#48BBEC',
    borderColor: '#48BBEC',
    borderWidth: 1,
    borderRadius: 8,
    marginBottom: 10,
    alignSelf: 'stretch',
    justifyContent: 'center'
  },
  searchInput: {
    height: 36,
    padding: 4,
    marginRight: 5,
    flex: 4,
    fontSize: 18,
    borderWidth: 1,
    borderColor: '#48BBEC',
    borderRadius: 8,
    color: '#48BBEC'
  }
});
