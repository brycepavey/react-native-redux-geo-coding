const {
  RECEIVE_LOCATION
} = require('../actions/locationActions')

const initialState = {
  location: '1600+Amphitheatre+Parkway,+Mountain+View,+CA'
}

function location(state = initialState, action) {
  // console.log('---ACTION TYPE---')
  // console.log(action)
  switch (action.type) {
      case RECEIVE_LOCATION:
        // console.log('---LOCATION---')
        // console.log(action.location)
        // location =  action.location
        return {
          ...state,
          location:      action.location,
          streetNo:      action.streetNo,
          locality:      action.locality,
          adminAreaLev2: action.adminAreaLev2,
          adminAreaLev1: action.adminAreaLev1,
          country:       action.country,
          postcode:      action.postcode
        };
      default:
        return state;
    }
}


//
//
// function location(state = initialState, action) {
//   console.log('---ACTION TYPE---')
//   console.log(action.type)
//   switch (action.type) {
//     case RECEIVE_LOCATION:
//
//       location =  action.location
//       return {
//         ...state,
//         location: location
//       };
//     default:
//       return state;
//   }
// }

module.exports = location
