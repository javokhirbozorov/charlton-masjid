import { combineReducers } from 'redux'
import { postReducer } from './postReducer'
import { adminReducer } from './adminReducer'

export const rootReducer = combineReducers({
  post: postReducer,
  admin: adminReducer
});
