import React from 'react'
import PostsList from '../Posts/PostsList'

const Home = ({isAdmin}) => {

return(
  <>
  <p>{isAdmin.username}</p><PostsList />
  </>
)
}

export default Home
