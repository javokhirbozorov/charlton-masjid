import { addAdmin } from "../../store/actions";
import { useDispatch, useSelector } from "react-redux";
// import { useState } from "react";
import { useNavigate } from "react-router-dom";

export const signUp = (email, username, password) => {
  // console.log(email, username, password);
  return async () => {
    try {
      const dispatch = useDispatch();
      const navigate = useNavigate();
      // const [error, setError] = useState(false);
      
      const response = await fetch('http://localhost:3000/api/signup', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email,
          username,
          password,
        }),
      });
      const data = await response.json();
      if (data.message) {
        dispatch(addAdmin({ username, email }));
        navigate('/');
      }
      if (data.emailExists) {
      }
    } catch (err) {
      console.log('=========>>>>');
    }

  };
}
