import { types } from './types'

export const addAdmin = ({ username, email }) => ({ type: types.ADD_ADMIN, payload: { username, email } });

export const Allnews = (data) => ({type: types.NEWS, payload: data});
export const Allposts = (data) => ({type: types.POSTS, payload: data});
export const Allevents = (data) => ({type: types.EVENTS, payload: data});
export const Alladmins = (admins) => ({type: types.ADMINS, payload: admins});

export const oneCard = (one) => ({type: types.ONE, payload: one})


export const signUpThunk = ( { email, username, password }, navigate) => {
  return async (dispatch) => {
      try {
        const obj = { email, username, password };
        const response = await fetch('http://localhost:3001/api/signup', {
          method: 'POST',
          credentials: 'include',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(obj),
        });
        const data = await response.json();
        if (data.message) {
          dispatch(addAdmin({ username: data.username, email: data.email }));
          navigate('/');
        }
        if (data.emailExists) {
          alert(data.emailExists);
        }
      } catch (err) {
        console.log('=========>>>>', err);
      }
      
    };
}

export const loginThunk = ( { email, password }, navigate) => {
  return async (dispatch) => {
    try {
      const obj = { email, password };
      const response = await fetch('http://localhost:3001/api/login', {
        method: 'POST',
        credentials: 'include',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(obj),
      });
      const data = await response.json();
      if (data.logIn) {
        dispatch(addAdmin({ username: data.username, email: data.email }));
        navigate('/');
      }
      if (data.error) {
        alert(data.error);
      }
      if (data.notFound) {
        alert(data.notFound);
      }
    } catch (err) {
      console.log('=========>>>>', err);
    }
    
  };
}

export const logOutThunk = (navigate) => {

};

export const checkAdminThunk = () => {
  return async (dispatch) => {
    try {
      const response = await fetch('http://localhost:3001/api/checkAdmin', {
        method: 'GET',
        credentials: 'include',
      });
      const data = await response.json();
      if (data.admin) {
        dispatch(addAdmin({ username: data.username, email: data.email }));
      }
    } catch (err) {
      console.log('=========>>>>', err);
    }
  };
};
