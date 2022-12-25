import { combineReducers } from 'redux'
import { positionsReducer } from './positions/positionReducer'
import { filterReducer } from './filters/filterReducer'

export const rootReducer = combineReducers({
  positions: positionsReducer,
  filters: filterReducer,
})
