import React from 'react'
import { useSelector } from 'react-redux'
import Item from './Items'
import styles from "./admin.module.css"

const PostList = () => {
  
    const posts = useSelector((state) => state.posts)

  return (
    <ul className={ styles.navComponent }>
      {
        posts.map(el => (
          <li key={ el.id } className={ styles.navComponent_item }> 
            <Item elem={ el }/>
          </li>
        ))
      }
    </ul>
  )
}

export default PostList