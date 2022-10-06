import React, {useEffect, useState} from 'react'
import Carousel from '../../components/carousel/Carousel'
import ThreeNewsList from '../../components/ThreeNewsList/ThreeNewsList'
import ThreeEventsList from '../../components/ThreeEventsList/ThreeEventsList'
import "./home.css"

const Home = () => {
return(
  <div>
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
