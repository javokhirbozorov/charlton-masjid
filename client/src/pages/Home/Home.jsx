import React, {useEffect, useState} from 'react'
import Carousel from '../../components/carousel/Carousel'
import ThreeNewsList from '../../components/ThreeNewsList/ThreeNewsList'
import ThreeEventsList from '../../components/ThreeEventsList/ThreeEventsList'
import "./home.css"

const Home = ({isAdmin}) => {

return(
  <div>
    <h1 className='text-center text-4xl mb-16' id='title'>Charlton Masjid Trust</h1>
  <div>
    <Carousel />
  </div>
  <div className='newsEvents'>
    <ThreeNewsList />
    <ThreeEventsList />
  </div>
  </div>
)
}

export default Home
