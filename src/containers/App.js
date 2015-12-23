const { bindActionCreators }  = require ('redux')
const { connect } = require ('react-redux/native')
const GeoLocationSearch = require('../components/GeoLocationSearch')
const LocationActions = require('../actions/locationActions')

function mapStateToProps(state) {

  return {
    location:      state.location.location,
    streetNo:      state.location.streetNo,
    locality:      state.location.locality,
    adminAreaLev2: state.location.adminAreaLev2,
    adminAreaLev1: state.location.adminAreaLev1,
    country:       state.location.country,
    postcode:      state.location.postcode,
    queryAddress:  state.location.queryAddress
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(LocationActions, dispatch)
}

module.exports = connect(mapStateToProps, mapDispatchToProps)(GeoLocationSearch)
