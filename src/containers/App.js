const { bindActionCreators }  = require ('redux')
const { connect } = require ('react-redux/native')
const GeoLocationSearch = require('../components/GeoLocationSearch')
const LocationActions = require('../actions/locationActions')

function mapStateToProps(state) {

  return {
    location:      state.location.location,
    address:       state.location.address,
    isLoading:     state.isLading
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(LocationActions, dispatch)
}

module.exports = connect(mapStateToProps, mapDispatchToProps)(GeoLocationSearch)
