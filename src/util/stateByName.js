import { initialState } from '../reducer'
export const STORE_KEY = 'submit'
export default (state, name) => state[STORE_KEY][name] || initialState
