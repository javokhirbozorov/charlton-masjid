import { combineReducers } from 'redux'
import { reducers } from '../initState'
import { adminReducer } from './adminReducer'

export const rootReducer = combineReducers({
  post: reducers,
  admin: adminReducer
});
