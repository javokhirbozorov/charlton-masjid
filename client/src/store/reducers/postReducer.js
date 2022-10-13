import { types } from '../types';
import { initState } from '../initState';

export const postReducer = (state = initState.products, action) => {
  switch (action.type) {
      case types.DELETE: 
      return;
      default:
          return state;
  }
}
