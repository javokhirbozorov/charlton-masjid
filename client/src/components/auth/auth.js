// import { addAdmin } from "../../store/actions";
// import { useDispatch } from "react-redux";
// import { useNavigate } from "react-router-dom";

// export const signUp = (email, username, password) => {
//   return async (dispatch) => {
//     if(email && username && password) {
//       try {
//         const dispatch = useDispatch();
//         const navigate = useNavigate();
//         const obj = { email, username, password };
//         const response = await fetch('http://localhost:3000/api/signup', {
//           method: 'POST',
//           headers: {
//             'Content-Type': 'application/json',
//           },
//           body: JSON.stringify(obj),
//         });
//         const data = await response.json();
//           localStorage.setItem('message', data.message);
//           dispatch(addAdmin({ username, email }));
//           navigate('/');
//         if (data.emailExists)
//         {
//           alert(data.emailExists);
//         }
//       } catch (err) {
//         console.log('=========>>>>');
//       }
//     } else {
//       alert('Fill in all the fields');
//     };
//   };
// }
