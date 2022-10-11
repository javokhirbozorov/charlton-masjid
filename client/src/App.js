import React from 'react';
import { Routes, Route, BrowserRouter } from 'react-router-dom';


/*  REDUX  */
import { Provider } from 'react-redux';
import { store } from './store';
import { Home, Events, AboutPage, Signup, Admin, Signup, News, Login, Donations } from './pages';
import { Footer, Navbar } from './components';
import Prayer from './components/Prayer/Prayer';
import PostsList from './pages/Posts/PostsList';
import Payment from './pages/payment/Payment';

import DetailsComponent from './pages/DetailsComponent/DetailsComponent';
import NewsList from './pages/admin/NewsList';
import AddNewEventForm from './pages/admin/AddNewEventForm';
import AddNewUserForm from './pages/admin/AddNewUserForm';



function App() {
  return (
    <BrowserRouter>
      <Provider store={store}>
          <Navbar/>

          <div className='flex justify-center relative'  style={{ padding: '60px 90px'  }}>

            <div className="w-1/4 flex">
              <div className="fixed py-16">
                <div className="flex justify-center aspect-w-1 aspect-h-1 w-56 h-40 overflow-hidden rounded-lg bg-gray-200 xl:aspect-w-7 xl:aspect-h-8" style={{ padding: '5px' }}>
                  <p className="mt-1 text-lg font-medium text-gray-900">Prayer time</p>
                </div>
              </div>
            </div>

            <div className='w-3/4 main'>
              <Routes>

                <Route path='/' element={ <Home/> }></Route>
                <Route path='/news' element={<News />}></Route>
                <Route path='/events' element={ <Events/> }></Route>
                <Route path="/events/:id" element={<DetailsComponent />} />
                <Route path="/news/:id" element={<DetailsComponent />} />
                <Route path="/posts/:id" element={<DetailsComponent />} />
                <Route path='/about' element={ <AboutPage/> }></Route>
                <Route path='/signup' element={ <Signup/> }></Route>
                <Route path='/login' element={ <Login/> }></Route>

                <Route path='/admin' element={ <Admin/> }>
                  <Route path='news' element={ <NewsList/> }/>
                  <Route path='donates' element={ <Login/> }/>
                  <Route path='admins' element={ <NewsList/> }/>
                  <Route path='events' element={ <NewsList/> }/>
                  <Route path='events/newEvent' element={ <AddNewEventForm/> }/>
                  <Route path='news/newEvent' element={ <AddNewEventForm/> }/>
                  <Route path='donates/newEvent' element={ <AddNewEventForm/> }/>
                  <Route path='admins/newAdmin' element={ <AddNewUserForm/> }/>
                </Route>
                
                <Route path='/posts' element={<PostsList />}></Route>
                <Route path='/donations' element={<Donations />}></Route>
                <Route path='/payment' element={<Payment/>}/>
              </Routes>
            </div>

          </div>

          <Footer />
      </Provider>
    
    </BrowserRouter>
  );
}


export default App;
