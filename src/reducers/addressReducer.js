var React = require('react-native');
const { ListView } = React;
const {
  RECEIVE_LOCATION,
  SET_SEARCH_STRING
} = require('../actions/locationActions')
const dataSource = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2})

const initialState = {
  locations: dataSource.cloneWithRows([]),
  address: [],
  isLoading: false,
  searchString: '158 city road'
}

function location(state = initialState, action) {
  switch (action.type) {
      case RECEIVE_LOCATION:

        return {
          ...state,
          locations:      dataSource.cloneWithRows(action.locations),
          address:       action.address,
          isLoading:     false
        };
      case SET_SEARCH_STRING:
        return {
          ...state,
          searchString:   action.searchString
        }
      default:
        return state;
    }
}

module.exports = location
