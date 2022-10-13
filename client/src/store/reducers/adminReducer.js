import { types } from '../types';
import { initState } from '../initState';

export const adminReducer = (state = initState.admin, action) => {
  switch (action.type) {
      case types.ADD_ADMIN: 
      return {...state, username: action.payload.username, email: action.payload.email};
      default:
          return state;
  }
}
