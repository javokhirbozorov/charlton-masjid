import React from 'react'
import styles from './admin.module.css'
/* import { useDispatch, useSelector } from 'react-redux'
import { Allposts } from '../../store/actions' */


const PostItem = ({ elem }) => {
/*   const dispatch = useDispatch();
  const posts = useSelector((state) => state.posts) */

      const DelPost = async function (e) {
            const response = await fetch('http://localhost:3001/delpost', {
              method: "POST",
              headers: {
                'Content-Type': 'application/json',
              },
              body: JSON.stringify({id: e.target.id })
            })
            const result = response.json().then((data) => alert(data.delete))
          /*   const delpost = posts.filter((el) => el.id !== e.target.id)
            dispatch(Allposts(delpost)) */
            
      }
  
  return (
    <>
      <p>{ elem.title }</p>
      <button id={ elem.id } onClick={DelPost} className={ styles.navComponent_item_btn }> Delete </button> 
    </>
  )
}

export default PostItem