import { types } from './types'

export const deleteCard = (id) => ({ type: types.DELETE, payload: { id } });
export const Allnews = (data) => ({type: types.NEWS, payload: data});
export const Allposts = (data) => ({type: types.POSTS, payload: data});
export const Allevents = (data) => ({type: types.EVENTS, payload: data});
