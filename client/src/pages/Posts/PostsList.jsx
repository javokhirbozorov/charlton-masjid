import React, {useState, useEffect} from 'react'
import PostCard from '../../components/postCard/PostCard'
import "./postslist.css"

import { Allposts } from '../../store/actions'

import { oneCard } from '../../store/actions'

import { useDispatch } from 'react-redux'

const PostsList = () => {
  const dispatch = useDispatch();

        
    const [posts, setPosts] = useState([])

    useEffect(() => {
      (async () => {
        const res = await fetch('http://localhost:3001/posts', {
          method: "GET",
          headers: {
            'Content-Type':'application/json'
          }
        });
        const data = await res.json()
        dispatch(Allposts(data))
        setPosts(data)
      })()
                
            }, [])
    const OnePost = (id) => {
          const one = posts.filter((el) => el.id === id);
          console.log(one)
          dispatch(oneCard(one[0]))
    }
  

  return (
    <div className='posts'>
        {posts.map((el) => 
         <PostCard post={el} OnePost={OnePost}/> )}

    </div>
          )
 }
 

export default PostsList