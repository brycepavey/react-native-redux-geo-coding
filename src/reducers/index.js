const { combineReducers } = require('redux')
const location = require('./addressReducer')

const rootReducer = combineReducers({
  location
})

module.exports = rootReducer
