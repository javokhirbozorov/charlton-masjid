import React from 'react';
import { Routes, Route, BrowserRouter } from 'react-router-dom';


/*  REDUX  */
import { Provider } from 'react-redux';
import { store } from './store';


/*  PAGES & COMPONENTS  */
import { Home, Events, AboutPage, Signup, Login, News } from './pages';
import { Footer, Navbar } from './components';
import Prayer from './components/Prayer/Prayer';
import PostsList from './pages/Posts/PostsList';


function App() {
  return (
    <BrowserRouter>
      <Provider store={store}>
          <Navbar/>

          <div className='flex justify-center relative'  style={{ padding: '80px 30px'  }}>

              <Prayer />

            <div className='w-3/4 main'>
              <Routes>
                <Route path='/' element={ <Home/> }></Route>
                <Route path='/events' element={ <Events/> }></Route>
                <Route path='/about' element={ <AboutPage/> }></Route>
                <Route path='/signup' element={ <Signup/> }></Route>
                <Route path='/login' element={ <Login/> }></Route>
                <Route path='/posts' element={<PostsList />}></Route>
                <Route path='/news' element={<News />}></Route>
              </Routes>
            </div>

          </div>

          <Footer />
      </Provider>
    
    </BrowserRouter>
  );
}


export default App;
