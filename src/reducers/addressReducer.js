const {
  RECEIVE_LOCATION

} = require('../actions/locationActions')

const initialState = {
  location: '1600+Amphitheatre+Parkway,+Mountain+View,+CA'
}

function location(state = initialState, action) {
  console.log('---ACTION TYPE---')
  console.log(action)
  switch (action.type) {
      case RECEIVE_LOCATION:
        // location =  action.location
        // console.log('-----USER LIST-----')
        // console.log(userList)
        return {
          ...state,
          location: action.location
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
