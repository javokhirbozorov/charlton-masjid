import React from 'react';
import { Routes, Route, BrowserRouter } from 'react-router-dom';


/*  REDUX  */
import { Provider } from 'react-redux';
import { store } from './store';


/*  PAGES & COMPONENTS  */
import { Home, Events, AboutPage, Signup, Login } from './pages';
import { Footer, Navbar } from './components';


function App() {
  return (
    <BrowserRouter>
      <Provider store={store}>
          <Navbar/>

          <div className='main'>
            <Routes>
              <Route path='/' element={ <Home/> }></Route>
              <Route path='/events' element={ <Events/> }></Route>
              <Route path='/about' element={ <AboutPage/> }></Route>
              <Route path='/signup' element={ <Signup/> }></Route>
              <Route path='/login' element={ <Login/> }></Route>
            </Routes>
          </div>

          <Footer />
      </Provider>
    
    </BrowserRouter>
  );
}


export default App;
