import { ADD_FILTER, CLEAR_FILTER, REMOVE_FILTER } from './filterActions'

export const filterReducer = (state = [], action) => {
  switch (action.type) {
    case ADD_FILTER:
      if (!state.includes(action.payload)) {
        return [...state, action.payload]
      }
      return state
    case REMOVE_FILTER:
      return state.filter((item) => item !== action.payload)
    case CLEAR_FILTER:
      return []

    default:
      return state
  }
}
