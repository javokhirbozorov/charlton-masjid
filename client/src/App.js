import React from 'react';
import { Routes, Route, BrowserRouter } from 'react-router-dom';


/*  REDUX  */
import { Provider } from 'react-redux';
import { store } from './store';



/*  PAGES & COMPONENTS  */
import { Home, Events, AboutPage, Signup, Login, Donations, Admin, News } from './pages';

import { Footer, Navbar } from './components';
import Prayer from './components/Prayer/Prayer';
import PostsList from './pages/Posts/PostsList';
import Payment from './pages/payment/Payment';

import DetailsComponent from './pages/DetailsComponent/DetailsComponent';
import NewsList from './pages/admin/NewsList';
import EventsList from "./pages/admin/EventsList"
import AddNewEventForm from './pages/admin/AddNewEventForm';
import AddNewUserForm from './pages/admin/AddNewUserForm';
import PostList from './pages/admin/PostList';
import Admins from './pages/admin/Admins';
import AddNewPostForm from './pages/admin/AddNewPostForm';
import AddNewNewsForm from './pages/admin/AddNewNewsForm';
import DonationsList from './pages/admin/DonationsList';
import AddNewDonationForm from './pages/admin/AddNewDonationForm';




function App() {
  return (
    <BrowserRouter>
      <Provider store={store}>
          <Navbar/>



            <div className='main'>
          <div className='flex justify-center relative'  style={{ padding: '60px 90px'  }}>
            <div className="w-1/4 flex">
              
                <Prayer />
              
            </div>
            <div className='w-3/4'>

              <Routes>

                <Route path='/' element={ <Home/> }></Route>
                <Route path='/news' element={<News />}></Route>
                <Route path='/events' element={ <Events/> }></Route>
                <Route path="/events/:id" element={<DetailsComponent />} />
                <Route path="/news/:id" element={<DetailsComponent />} />
                <Route path="/posts/:id" element={<DetailsComponent />} />
                <Route path='/about' element={ <AboutPage/> }></Route>
                <Route path='/payment' element={<Payment />} />
                <Route path='/signup' element={ <Signup/> }></Route>
                <Route path='/news' element={ <News/> }></Route>
                <Route path='/donations' element={ <Donations/> }></Route>
                <Route path='/login' element={ <Login/> }></Route>

                <Route path='/admin' element={ <Admin/> }>
                  <Route path='news' element={ <NewsList/> }/>
                  <Route path='donates' element={ <DonationsList/> }/>
                  <Route path='events' element={ <EventsList/> }/>
                  <Route path='admins' element={<Admins />}/>
                  <Route path='posts' element={ <PostList/> }/>
                  <Route path='events/new' element={ <AddNewEventForm/> }/>
                  <Route path='news/new' element={ <AddNewNewsForm/> }/>
                  <Route path='posts/new' element={ <AddNewPostForm/> }/>
                  <Route path='donates/new' element={ <AddNewDonationForm/> }/>
                  <Route path='admins/newAdmin' element={ <AddNewUserForm/> }/>
                </Route>
                
                <Route path='/posts' element={<PostsList />}></Route>
              </Routes>
            </div>
            </div>

          </div>

          <Footer />
      </Provider>
    
    </BrowserRouter>
  );
}


export default App;
