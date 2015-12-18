const { bindActionCreators }  = require ('redux')
const { connect } = require ('react-redux/native')
const Location = require('../components/Location')
const LocationActions = require('../actions/locationActions')

function mapStateToProps(state) {
  
  return {
    location: state.location.location
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(LocationActions, dispatch)
}

module.exports = connect(mapStateToProps, mapDispatchToProps)(Location)
