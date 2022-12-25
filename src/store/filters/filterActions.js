export const ADD_FILTER = 'ADD_FILTER'
export const REMOVE_FILTER = 'REMOVE_FILTER'
export const CLEAR_FILTER = 'CLEAR_FILTER'

export const addFilterAC = (filter) => ({
  type: ADD_FILTER,
  payload: filter,
})
export const removeFilterAC = (filter) => ({
  type: REMOVE_FILTER,
  payload: filter,
})
export const clearFilterAction = {
  type: CLEAR_FILTER,
}
