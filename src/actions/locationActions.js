// import fetch from 'isomorphic-fetch'
// if (typeof process !== 'undefined') {
//     require('isomorphic-fetch');
// }

var actions = exports = module.exports

exports.UPDATE_LOCATION = 'UPDATE_LOCATION'
exports.RECEIVE_LOCATION = 'RECEIVE_LOCATION'
exports.REQUEST_LOCATION = 'REQUEST_LOCATION'

exports.updateLocation = function updateLocation(address) {
  // return dispatch => {
  //   return fetch('https://maps.googleapis.com/maps/api/geocode/json?&encoding=json&address={location}')
  //   .then((response) => console.log(response))
  // }
  return dispatch => {
    // dispatch(actions.requestLocation(address))
    return fetch('https://maps.googleapis.com/maps/api/geocode/json?&encoding=json&address=1600+Amphitheatre+Parkway,+Mountain+View,+CA')
      .then((response) => response.json())
      .then(json => dispatch(exports.receiveLocation(address, json)))
      // .then(json => console.log(json))
  }
}

exports.requestLocation = function requestLocation(address) {
  return {
    type: REQUEST_LOCATION,
    location: address
  }
}

exports.receiveLocation = function receiveLocation(address, json) {
  console.log('---RECEIVE LOCATION---')
  // console.log(json.results)
  // console.log(json.data.children.map(child => child.data))
  return {
    type: RECEIVE_LOCATION,
    location: json.results
  }
}
