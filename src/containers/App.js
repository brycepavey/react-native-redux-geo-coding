const React = require('react-native');
const { bindActionCreators }  = require ('redux')
const { connect } = require ('react-redux/native')
const GeoLocationSearch = require('../components/GeoLocationSearch')
const locationActions = require('../actions/locationActions')

function mapStateToProps(state) {

  return {
    location:      state.location.location,
    address:       state.location.address,
    isLoading:     state.location.isLoading,
    searchString:  state.location.searchString
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(locationActions, dispatch)
}

module.exports = connect(mapStateToProps, mapDispatchToProps)(GeoLocationSearch)
