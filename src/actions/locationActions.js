// import fetch from 'isomorphic-fetch'
// if (typeof process !== 'undefined') {
//     require('isomorphic-fetch');
// }

var actions = exports = module.exports

exports.UPDATE_LOCATION = 'UPDATE_LOCATION'
exports.RECEIVE_LOCATION = 'RECEIVE_LOCATION'
exports.REQUEST_LOCATION = 'REQUEST_LOCATION'

exports.updateLocation = function updateLocation(address) {
  var query = `https://maps.googleapis.com/maps/api/geocode/json?&encoding=json&address=${address}`
  console.log(query)

  return dispatch => {
    return fetch(`https://maps.googleapis.com/maps/api/geocode/json?&encoding=json&address=${address}`)
      .then((response) => response.json())
      .then(json => dispatch(receiveLocation(address, json)))
  }
}

exports.requestLocation = function requestLocation(address) {
  return {
    type: REQUEST_LOCATION,
    location: address
  }
}

function receiveLocation(address, json) {
  // var jsonData = JSON.parse(json.results);

  // console.log(json)
  // return {
  //   type: actions.RECEIVE_LOCATION,
  //   location: json,
  // }

  var streetNo = []
  var route = []
  var locality = []
  var adminAreaLev2 = []
  var adminAreaLev1 = []
  var country = []
  var postcode = []

  if(json.results.length == 1) {
    // streetNo = json.results[0].address_components[0].long_name
    streetNo.push(json.results[0].address_components[0].long_name)
    streetNo.push(json.results[0].address_components[0].short_name)

    locality.push(json.results[0].address_components[1].long_name)
    locality.push(json.results[0].address_components[1].short_name)

    adminAreaLev2.push(json.results[0].address_components[2].long_name)
    adminAreaLev2.push(json.results[0].address_components[2].short_name)

    adminAreaLev1.push(json.results[0].address_components[3].long_name)
    adminAreaLev1.push(json.results[0].address_components[3].short_name)

    country.push(json.results[0].address_components[4].long_name)
    country.push(json.results[0].address_components[4].short_name)

    postcode.push(json.results[0].address_components[5].long_name)
    postcode.push(json.results[0].address_components[5].short_name)
  }
  else {
    console.log('Error: expected 1 result, received ' + json.results.length + '.')
  }


  return {
    type: actions.RECEIVE_LOCATION,
    location: json.results,
    streetNo,
    locality,
    adminAreaLev2,
    adminAreaLev1,
    country,
    postcode
  }
}
