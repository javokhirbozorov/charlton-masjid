import React, {useEffect} from 'react'
import { useSelector, useDispatch } from 'react-redux'
import PostItem from './PostItem'
import styles from "./admin.module.css"
import { Allposts } from '../../store/actions'

const PostList = () => {
  const dispatch = useDispatch();
    const posts = useSelector((state) => state.post.posts)

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
      })()   
            }, [])

  return (
    <ul className={ styles.navComponent }>
      {
        posts.map(el => (
          <li key={ el.id } className={ styles.navComponent_item }> 
            <PostItem elem={ el }/>
          </li>
        ))
      }
    </ul>
  )
}

export default PostList