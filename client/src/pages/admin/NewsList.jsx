import React from 'react'
import Item from './Items'
import styles from './admin.module.css'
import { useSelector } from 'react-redux'





const NewsList = () => {

    const news = useSelector((state) => state.news)

  return (
    <ul className={ styles.navComponent }>
      {
        news.map(el => (
          <li key={ el.id } className={ styles.navComponent_item }> 
            <Item elem={ el }/>
          </li>
        ))
      }
    </ul>
  )
}

export default NewsList