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
  var address = []
  for(var i = 0; i < json.results.length; i++){
      address.push(json.results[i].address_components.formatted_address)
  }

  return {
    type: actions.RECEIVE_LOCATION,
    location: json.results,
    address: address
  }
}
