import React, { useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import { useSelector } from 'react-redux';

/*  REDUX  */
import { useDispatch } from 'react-redux';

/*  PAGES & COMPONENTS  */
import { Home, Events, AboutPage, Signup, Login } from './pages';
import { Footer, Navbar } from './components';
import Prayer from './components/Prayer/Prayer';
import { checkAdminThunk } from './store/actions';

function App() {

  const dispatch = useDispatch();
  const admin = useSelector((state) => state.admin);

  useEffect(() => {
    dispatch(checkAdminThunk());
    console.log('App.js useEffect');
  }, []);

    return (
      
          <>
        <Navbar isAdmin={admin}/>
        <div className='flex justify-center relative' style={{ padding: '80px 30px' }}>
        <Prayer />
        <div className='main'>

          <Routes>
            <Route path='/' element={<Home isAdmin={admin}/>}></Route>
            <Route path='/events' element={<Events />}></Route>
            <Route path='/about' element={<AboutPage />}></Route>
            <Route path='/signup' element={<Signup />}></Route>
            <Route path='/login' element={<Login />}></Route>
          </Routes>
        </div>

      </div><Footer />
      </>

  );
}


export default App;
