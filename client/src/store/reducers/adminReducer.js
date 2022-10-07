import { types } from '../types';
import { initState } from '../initState';

export const adminReducer = (state = initState.admin, action) => {
  switch (action.type) {
      case types.ADD_ADMIN: 
      return {...state, state: action.payload};
      default:
          return state;
  }
}
