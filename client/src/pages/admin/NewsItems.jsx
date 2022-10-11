import React from 'react'
import styles from './admin.module.css'


const NewsItem = ({ news }) => {
  
  return (
    <>
      <div className={ styles.navComponent_item_date }>{ news.date }</div>
      <p>{ news.descr }</p>
      <button id={ news.id } className={ styles.navComponent_item_btn }> Edit </button> 
    </>
  )
}

export default NewsItem