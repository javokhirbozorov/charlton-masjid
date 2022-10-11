import React, {useState, useEffect} from 'react'
import PostCard from '../../components/postCard/PostCard'
import "./postslist.css"

const PostsList = () => {
        
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