import React, {useState, useEffect} from 'react'
import PostCard from '../../components/postCard/PostCard'
import "./postslist.css"
import { Allposts } from '../../store/actions'
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

  return (
    <div className='posts'>
        {posts.map((el) => 
        <PostCard post={el}/> )}
    </div>
          )
 }
 

export default PostsList