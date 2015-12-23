'use strict'

var React = require('react-native');
var {
  StyleSheet,
  Text,
  TextInput,
  View,
  TouchableHighlight,
  ActivityIndicatorIOS,
  Image,
  Component
} = React;

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

var GeoLocationData = require('./GeoLocationData');

function urlForQueryAndPage(key, value, address) {
  var data = {
    encoding: 'json',
    address: address
  };
  data[key] = value;

  var querystring = Object.keys(data)
    .map(key => key + '=' + encodeURIComponent(data[key]))
    .join('&');
  return 'https://maps.googleapis.com/maps/api/geocode/json?' + querystring;
}

class GeoLocationSearch extends Component {

  constructor(props) {
    super(props);
    this.state = {
      searchString: '158 City Road Melbourne 3088',
      isLoading: false,
      message: ''
    };
  }

  onSearchTextChanged(event) {
    this.setState({ searchString: event.nativeEvent.text.trim().split(' ').join('+') });
    console.log(this.state.searchString.trim().split(' ').join('+'));
  }

  _executeQuery(query) {
    console.log(query);
    this.setState({ isLoading: true });

    fetch(query)
      .then(response => response.json())
      .then(json => this._handleResponse(json.response))
      .catch(error =>
        this.setState({
          isLoading: false,
          message: 'Something bad happened' + error
        }));
  }

  _handleResponse(response) {
    this.setState({ isLoading: false, message: ''});
    if(response.application_response_code.substr(0, 1) == '1') {
      this.props.navigator.push({
        title: 'Results',
        component: GeoLocationData,
        passProps: {listings: response.listings}
      })
    } else {
      this.setState({ message: 'Location not recognized; please try again.'});
    }
  }

  onSearchPressed() {
    var query = urlForQueryAndPage('place_name', this.state.searchString, 1);
    console.log(query)
    this._executeQuery(query);
  }

  render() {

    var spinner = this.state.isLoading ?
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
            value={this.props.searchString}
            onChange={this.onSearchTextChanged.bind(this)}
            placeholder='Search via address'
          />
          <TouchableHighlight style={styles.button}
            underlayColor='#99d9f4'>
            <Text
              style={styles.buttonText}
              onPress={this.onSearchPressed.bind(this)}>
              Go
            </Text>
          </TouchableHighlight>
        </View>
        {spinner}
        <Text style={styles.description}>{this.state.message}</Text>
      </View>
    )
  }
}

module.exports = GeoLocationSearch;
