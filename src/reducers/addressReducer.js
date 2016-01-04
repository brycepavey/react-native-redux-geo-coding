const {
  RECEIVE_LOCATION
} = require('../actions/locationActions')

const initialState = {
  location: []
}

function location(state = initialState, action) {
  switch (action.type) {
      case RECEIVE_LOCATION:
        return {
          ...state,
          location:      action.location,
          address:       action.address,
          isLoading:     false
        };
      default:
        return state;
    }
}

module.exports = location
