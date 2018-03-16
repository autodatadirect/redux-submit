import * as types from './constants/actionTypes'

export const initialState = {
  test: 'test'
}

const reduceRegisterData = (state, action) => ({
  ...state
})

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case types.REGISTER: return reduceRegisterData(state, action)
    default: return state
  }
}

export default (state = {}, action) => {
  switch (action.type) {
    case types.REGISTER:
      return {
        ...state,
        [action.name]: reducer(state[action.name], action)
      }
    case types.DESTROY:
      const clonedState = {...state}
      delete clonedState[action.name]
      return clonedState
    default:
      return state
  }
}
