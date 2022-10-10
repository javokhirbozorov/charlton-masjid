import { types } from './types'

export const addAdmin = ({ username, email }) => ({ type: types.ADD_ADMIN, payload: { username, email } });

export const signUpThunk = ( { email, username, password }, navigate) => {
  return async (dispatch) => {
      try {
        const obj = { email, username, password };
        const response = await fetch('http://localhost:3001/api/signup', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(obj),
        });
        const data = await response.json();
        if (data.message) {
          dispatch(addAdmin({ username, email }));
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
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(obj),
      });
      const data = await response.json();
      if (data.logIn) {
        dispatch(addAdmin({ email }));
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
