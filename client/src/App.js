import React from 'react';
import { Routes, Route, BrowserRouter } from 'react-router-dom';


/*  REDUX  */
import { Provider } from 'react-redux';
import { store } from './store';


/*  PAGES & COMPONENTS  */
import { Home, Events, AboutPage, Signup, Login,Donations } from './pages';

// Importing Donations page

import { Footer, Navbar } from './components';


function App() {
  return (
    <BrowserRouter>
      <Provider store={store}>
          <Navbar/>

          <div className='flex justify-center relative'  style={{ padding: '80px 30px'  }}>

            <div className="w-1/4 flex justify-center">
              <div className="fixed py-16 px-4">
                <div className="flex justify-center aspect-w-1 aspect-h-1 w-56 h-40 overflow-hidden rounded-lg bg-gray-200 xl:aspect-w-7 xl:aspect-h-8" style={{ padding: '5px' }}>
                  <p className="mt-1 text-lg font-medium text-gray-900">Prayer time</p>
                </div>
              </div>
            </div>

            <div className='w-3/4 main'>
              <Routes>
                <Route path='/' element={ <Home/> }></Route>
                <Route path='/events' element={ <Events/> }></Route>
                <Route path='/about' element={ <AboutPage/> }></Route>
                <Route path='/signup' element={ <Signup/> }></Route>
                <Route path='/login' element={ <Login/> }></Route>
                <Route path='/donations' element={ <Donations/> }></Route>
              </Routes>
            </div>

          </div>

          <Footer />
      </Provider>
    
    </BrowserRouter>
  );
}


export default App;
