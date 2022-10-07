import { addAdmin } from "../../store/actions";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

export const signUp = (email, username, password) => {
  return async () => {
    // const admin = useSelector((state) => state.admin);
    try {
      const dispatch = useDispatch();
      const navigate = useNavigate();
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
