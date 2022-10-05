import { types } from './types'

export const deleteCard = (id) => ({ type: types.DELETE, payload: { id } });

