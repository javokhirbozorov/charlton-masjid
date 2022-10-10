import { types } from './types'

export const deleteCard = (id) => ({ type: types.DELETE, payload: { id } });
export const oneCard = (one) => ({type: types.ONE, payload: one})

