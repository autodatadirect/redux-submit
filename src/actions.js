import * as types from './constants/actionTypes'

const err = message => new Error('Redux Manifest Action: ' + message)

export const register = name => {
  if (!name) throw err('submit button name must be set')
  return {
    type: types.REGISTER,
    name
  }
}

export const destroy = name => {
  if (!name) throw err('submit button name must be set')
  return {
    type: types.DESTROY,
    name
  }
}
